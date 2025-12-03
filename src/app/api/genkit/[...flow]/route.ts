import { flowHandler } from '@genkit-ai/next';
import '@/ai/dev'; // registers flows

export const { GET, POST } = flowHandler();

