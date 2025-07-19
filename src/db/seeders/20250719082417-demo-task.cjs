'use strict';

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Tasks', [
      {
        id: 1,
        name: 'Jantar',
        description: '',
        deadline: null,
        priority: 'low',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Trabalho da Faculdade',
        description: '',
        deadline: '07/21/2025',
        priority: 'high',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};