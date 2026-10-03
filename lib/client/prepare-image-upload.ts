const JPEG_QUALITIES = [0.9, 0.82, 0.74, 0.66, 0.58, 0.5, 0.42] as const;
const DIMENSION_REDUCTION_FACTOR = 0.85;
const MAX_RESIZE_ATTEMPTS = 4;

interface ImagePreparationOptions {
  maxDimension: number;
  targetBytes: number;
  maxSourceBytes: number;
}

export interface PreparedImageUpload {
  file: File;
  originalName: string;
  originalBytes: number;
  outputWidth: number;
  outputHeight: number;
}

interface DecodedImage {
  source: CanvasImageSource;
  width: number;
  height: number;
  close: () => void;
}

function fitWithinSquare(width: number, height: number, maxDimension: number) {
  const scale = Math.min(1, maxDimension / Math.max(width, height));

  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

function optimizedFileName(originalName: string) {
  const baseName = originalName.replace(/\.[^.]+$/, '').trim() || 'image';
  return `${baseName}-optimized.jpg`;
}

function canvasToJpeg(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
          return;
        }

        reject(new Error('The browser could not prepare this image.'));
      },
      'image/jpeg',
      quality,
    );
  });
}

async function decodeWithImageElement(file: File): Promise<DecodedImage> {
  const objectUrl = URL.createObjectURL(file);

  try {
    const image = new Image();
    image.decoding = 'async';
    image.src = objectUrl;
    await image.decode();

    return {
      source: image,
      width: image.naturalWidth,
      height: image.naturalHeight,
      close: () => URL.revokeObjectURL(objectUrl),
    };
  } catch (error) {
    URL.revokeObjectURL(objectUrl);
    throw error;
  }
}

async function decodeImage(file: File): Promise<DecodedImage> {
  if (typeof createImageBitmap === 'function') {
    try {
      const bitmap = await createImageBitmap(file, {
        imageOrientation: 'from-image',
      });

      return {
        source: bitmap,
        width: bitmap.width,
        height: bitmap.height,
        close: () => bitmap.close(),
      };
    } catch {
      // Fall through to the image-element decoder for browser compatibility.
    }
  }

  return decodeWithImageElement(file);
}

export async function prepareImageUpload(
  sourceFile: File,
  options: ImagePreparationOptions,
): Promise<PreparedImageUpload> {
  if (sourceFile.size > options.maxSourceBytes) {
    throw new Error('Choose an image no larger than 50 MB.');
  }

  let decodedImage: DecodedImage;

  try {
    decodedImage = await decodeImage(sourceFile);
  } catch {
    throw new Error(
      'The selected image could not be read. Choose another JPEG, PNG, or WebP file.',
    );
  }

  try {
    if (decodedImage.width < 1 || decodedImage.height < 1) {
      throw new Error('The selected image has invalid dimensions.');
    }

    const fittedSize = fitWithinSquare(
      decodedImage.width,
      decodedImage.height,
      options.maxDimension,
    );

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { alpha: false });

    if (!context) {
      throw new Error('The browser could not prepare this image.');
    }

    let outputWidth = fittedSize.width;
    let outputHeight = fittedSize.height;

    for (
      let resizeAttempt = 0;
      resizeAttempt < MAX_RESIZE_ATTEMPTS;
      resizeAttempt += 1
    ) {
      canvas.width = outputWidth;
      canvas.height = outputHeight;
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, outputWidth, outputHeight);
      context.drawImage(decodedImage.source, 0, 0, outputWidth, outputHeight);

      for (const quality of JPEG_QUALITIES) {
        const blob = await canvasToJpeg(canvas, quality);

        if (blob.size <= options.targetBytes) {
          return {
            file: new File([blob], optimizedFileName(sourceFile.name), {
              type: 'image/jpeg',
              lastModified: Date.now(),
            }),
            originalName: sourceFile.name,
            originalBytes: sourceFile.size,
            outputWidth,
            outputHeight,
          };
        }
      }

      outputWidth = Math.max(
        1,
        Math.round(outputWidth * DIMENSION_REDUCTION_FACTOR),
      );
      outputHeight = Math.max(
        1,
        Math.round(outputHeight * DIMENSION_REDUCTION_FACTOR),
      );
    }

    throw new Error(
      'The image could not be reduced enough for upload. Choose a smaller image.',
    );
  } finally {
    decodedImage.close();
  }
}
