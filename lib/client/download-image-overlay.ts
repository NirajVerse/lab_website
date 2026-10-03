interface DownloadImageOverlayOptions {
  baseImageUrl: string;
  overlayImageUrl: string;
  width: number;
  height: number;
  fileName: string;
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

export async function downloadImageOverlay({
  baseImageUrl,
  overlayImageUrl,
  width,
  height,
  fileName,
}: DownloadImageOverlayOptions) {
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

  const resultBlob = await canvasToPng(canvas);
  const resultUrl = URL.createObjectURL(resultBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = resultUrl;
  downloadLink.download = fileName;
  downloadLink.hidden = true;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  window.setTimeout(() => URL.revokeObjectURL(resultUrl), 1_000);
}
