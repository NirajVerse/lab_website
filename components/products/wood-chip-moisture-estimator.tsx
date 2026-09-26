import { ImageRegressionTrial } from '@/components/products/image-classifier-trial';

export function WoodChipMoistureEstimator() {
  return (
    <ImageRegressionTrial
      endpoint="/api/predict/wood-chip-moisture"
      inputId="wood-chip-moisture-image"
      instructions="Choose one supported wood-chip image. The model will return an estimated moisture content percentage."
    />
  );
}
