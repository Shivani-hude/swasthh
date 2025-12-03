// src/app/api/genkit/[...flow]/route.ts
import { appRoute } from '@genkit-ai/next';
import * as flows from '@/genkit'; // assumes you export your flows from src/genkit/index.ts

// Helper to adapt Next.js dynamic handlers
function makeHandler(flow: any) {
  const handler = appRoute(flow); // this is a function that Next expects
  return async (req: Request, ctx: any) => {
    // appRoute returns a handler that accepts Next's Request-like object.
    return handler(req as any);
  };
}

export async function POST(req: Request, { params }: { params?: { flow?: string[] } }) {
  const name = params?.flow?.[0] ?? '';
  const flow = (flows as any)[name];
  if (!flow) return new Response(`Flow "${name}" not found`, { status: 404 });
  return makeHandler(flow)(req);
}


