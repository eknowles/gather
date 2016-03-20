'use strict';

import express from 'express';
import passport from 'passport';
import {signToken} from '../auth.service';
import {User} from '../../sqldb';
import config from '../../config/environment';

var router = express.Router();

if (config.env !== 'production') {
  router.get('/test', function (req, res) {
    User.find({where: {steam: '76561198012790352'}}).then(user => {
      var token = signToken(user._id, user.role, user.level);
      res.cookie('token', token);
      res.redirect('/');
    });
  });
}

router.get('/:return?', function (req, res, next) {
  passport.authenticate('steam', function(err, user, info) {
    if (user) {
      var token = signToken(user._id, user.role, user.level);
      res.cookie('token', token);
    }
    res.redirect('/');
  })(req, res, next)
});

export default router;
