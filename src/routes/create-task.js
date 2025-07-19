import { z } from 'zod/v4';
import { schema } from '../../src/db/models/index.js';

const taskSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  deadline: z.coerce.date().optional(),
  priority: z.enum(['high', 'medium', 'low']),
  completed: z.boolean(),
});

export const createTaskRoute = (app) => {
  app.post('/tasks', async (request, reply) => {
    const parseResult = taskSchema.safeParse(request.body);

    if (!parseResult.success) {
      return reply.status(400).send({ error: parseResult.error.flatten() });
    }

    const { name, description, deadline, priority, completed } =
      parseResult.data;

    const insertedTask = await schema.Tasks.create({
      name,
      description,
      deadline,
      priority,
      completed,
    });

    if (!insertedTask) {
      throw new Error('Failed to create new task.');
    }

    return reply.status(201).send({ taskId: insertedTask.id });
  });
};