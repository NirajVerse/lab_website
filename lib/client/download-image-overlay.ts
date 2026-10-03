interface ImageOverlayOptions {
  baseImageUrl: string;
  overlayImageUrl: string;
  width: number;
  height: number;
}

function loadImage(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = () =>
      reject(new Error('A result image could not be read.'));
    image.src = url;
  });
}

function canvasToPng(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }

      reject(new Error('The browser could not create the result image.'));
    }, 'image/png');
  });
}

export async function createImageOverlay({
  baseImageUrl,
  overlayImageUrl,
  width,
  height,
}: ImageOverlayOptions) {
  const [baseImage, overlayImage] = await Promise.all([
    loadImage(baseImageUrl),
    loadImage(overlayImageUrl),
  ]);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d', { alpha: false });

  if (!context) {
    throw new Error('The browser could not create the result image.');
  }

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.drawImage(baseImage, 0, 0, width, height);
  context.drawImage(overlayImage, 0, 0, width, height);

  return canvasToPng(canvas);
}

export function downloadImageFile(imageUrl: string, fileName: string) {
  const downloadLink = document.createElement('a');
  downloadLink.href = imageUrl;
  downloadLink.download = fileName;
  downloadLink.hidden = true;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}
