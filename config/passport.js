require('dotenv').config();
// A passport strategy for authentiting with a json web token
// This allows us to authenticate endpoint using a token
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// JWT_SECRET is inside of our environment
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) =>{
        // Have a user that we're going to find by the id in the payload
        // When we get a user back we will check for user in database
    }))
}