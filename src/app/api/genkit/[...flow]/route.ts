import { createFlowHandler } from '@genkit-ai/next';
import '@/ai/dev'; // registers flows
export const { GET, POST } = createFlowHandler();

