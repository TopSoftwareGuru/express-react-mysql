'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors', [{
        userName: 'koray',
        email: 'demo@demo.com',
        password: '$2b$10$MWFRU51x/.265V53SDY4vOoBHmhmzqpn5K.Uxw6tmVtoCQtAP.DFC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'killoman',
        email: 'jane@demo.com',
        password: '$2b$10$f2kVYrZQczSRyuBZWkk4te0nRH15DssR172NtIf/aTlEv0YiJLOJ.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
