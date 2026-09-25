import { ImageClassifierTrial } from '@/components/products/image-classifier-trial';

const classes = [
  { key: '2A', label: '2A' },
  { key: '3A', label: '3A' },
  { key: '4A', label: '4A' },
] as const;

export function GuitarVeneerClassifier() {
  return (
    <ImageClassifierTrial
      endpoint="/api/predict/guitar-veneer"
      inputId="guitar-veneer-classifier-image"
      instructions="Choose one supported guitar veneer image. The model will return a 2A, 3A, or 4A prediction with confidence scores for all three grades."
      classes={classes}
    />
  );
}
