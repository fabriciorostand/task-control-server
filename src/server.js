import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import { env } from './env.js';
import { createTaskRoute } from './routes/create-task.js';
import { getTasksRoute } from './routes/get-tasks.js';

const app = fastify();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.get('/health', () => {
  return 'OK';
});

app.register(getTasksRoute);
app.register(createTaskRoute);

app.listen({ port: env.PORT });