import { proxyMoisturePrediction } from '@/lib/server/image-prediction-proxy';

export function POST(request: Request) {
  return proxyMoisturePrediction(request);
}
