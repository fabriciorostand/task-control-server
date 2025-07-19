'use strict';

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('tasks', [
      {
        id: 1,
        name: 'Jantar',
        description: '',
        deadline: null,
        priority: 'low',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('tasks', null, {});
  },
};