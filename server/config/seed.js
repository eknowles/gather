/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var User = sqldb.User;

User.sync()
  .then(() => User.destroy({ where: {} }))
  .then(() => {
    User.bulkCreate([{
      provider: 'steam',
      role: 'admin',
      name: 'KLUTCH',
      email: 'klutch@example.com',
      password: 'admin',
      steam: '76561198012790352',
      avatar: 'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/54/54fe83e4a6641eab1bde850a9b68abc9ccbd94c1_full.jpg'
    }])
    .then(() => {
      console.log('finished populating users');
    });
  });
