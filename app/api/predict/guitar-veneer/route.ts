import { proxyImagePrediction } from '@/lib/server/image-prediction-proxy';

export function POST(request: Request) {
  return proxyImagePrediction(request, {
    upstreamPath: '/models/guitar-veneer/predict',
    labels: ['2A', '3A', '4A'],
  });
}
