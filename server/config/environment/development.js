'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: 'mysql://root:@localhost:3306/gather',
    options: {
      logging: false,
      define: {
        timestamps: true
      }
    }
  },

  // Seed database on startup
  seedDB: true

};
