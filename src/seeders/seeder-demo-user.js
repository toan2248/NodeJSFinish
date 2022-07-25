'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'hary@gmail.com',
      password: '123456',
      firstName: 'Hary',
      lastName: 'Poster',
      address: 'America',
      phonenumber: '0123456789',
      gender: 1,
      image: 'src/image/haryposter',
      roleId: 'R1',
      positionId: 'Thạc Sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
