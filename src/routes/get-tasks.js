import { schema } from '../../src/db/models/index.js';

export const getTasksRoute = (app) => {
  app.get('/tasks', async (request, reply) => {
    const { completed } = request.query;

    const where = {};
    if (completed !== undefined) {
      where.completed = completed === 'true';
    }

    const results = await schema.Tasks.findAll({
      attributes: [
        'id',
        'name',
        'description',
        'deadline',
        'priority',
        'completed',
      ],
      where,
      order: [
        ['priority', 'DESC'],
        ['deadline', 'ASC'],
      ],
    });

    reply.send(results);
  });
};