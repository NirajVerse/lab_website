import { proxyTreeRingPrediction } from '@/lib/server/image-prediction-proxy';

export function POST(request: Request) {
  return proxyTreeRingPrediction(request);
}
