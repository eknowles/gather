import passport from 'passport';
import {Strategy as SteamStrategy} from 'passport-steam';

function steamAuthenticate(User, identifier, profile, done) {
  console.log(identifier, profile.id.toString());
  User.find({where: {steam: profile.id.toString()}})
    .then(user => {
      if (user) {
        return done(null, user);
      } else {
        // Create User
        var newUser = User.build({
          name: profile.displayName,
          steam: profile.id.toString(),
          avatar: profile.photos[2].value,
          role: 'user',
          provider: 'steam'
        });
        return newUser.save().then(docs => done(null, docs)).catch(err => done(err));
      }
    })
    .catch(err => done(err));
}

export function setup(User, config) {
  var apiKey, protocol;
  apiKey = process.env.STEAM_API || config.STEAM_API || '';
  protocol = config.env === 'production' ? 'https://' : 'http://';
  console.log(protocol + config.domain + '/auth/steam/' + config.steam.returnPath);
  passport.use(new SteamStrategy({
    returnURL: protocol + config.domain + '/auth/steam/' + config.steam.returnPath,
    realm: protocol + config.domain,
    apiKey: apiKey
  }, function (identifier, profile, done) {
    return steamAuthenticate(User, identifier, profile, done);
  }));
}
