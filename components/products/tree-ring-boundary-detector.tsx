import { ImageSegmentationTrial } from '@/components/products/image-classifier-trial';

export function TreeRingBoundaryDetector() {
  return (
    <ImageSegmentationTrial
      endpoint="/api/predict/tree-ring-detection"
      inputId="tree-ring-boundary-image"
      instructions="Choose one clear wood cross-section image. The generic model will resize it to 1504 × 1504 pixels and highlight likely tree-ring boundary pixels."
    />
  );
}
