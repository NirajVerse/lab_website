import { ImageClassifierTrial } from '@/components/products/image-classifier-trial';

const classes = [
  { key: 'ro', label: 'RO' },
  { key: 'syp', label: 'SYP' },
] as const;

export function SypRoClassifier() {
  return (
    <ImageClassifierTrial
      endpoint="/api/predict"
      inputId="syp-ro-classifier-image"
      instructions="Choose one supported image. The model will return an RO or SYP prediction with confidence scores for both classes."
      classes={classes}
    />
  );
}
