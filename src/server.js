import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import { env } from './env.js';

const app = fastify();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.get('/health', () => {
  return 'OK';
});

app.listen({ port: env.PORT });