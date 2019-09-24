const passport = require ("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedinStrategy = require("passport-linkedin-oauth2").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user =>{
            done(null, user)
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id})// Asynchronous query to find the first record inside the collection with the id = profile.id
                .then ((existingUser)=>{
                    if(existingUser){
                        // we already have a record with the given profile ID
                        done(null, existingUser); //
                    } else {
                        // we don't have a user record with this id, create a new record
                        new User({ googleId: profile.id})
                            .save()
                            .then(user => done(null, user));
                    }
                }) 
            
        }
    )
);

passport.use(
    new LinkedinStrategy(
        { 
            clientID: keys.linkedinClientID,
            clientSecret: keys.linkedinClientSecret,
            callbackURL: '/auth/linkedin/callback',
            proxy:true
        }, (accessToken, refreshToken, profile, done) => {
            console.log("accessToken:", accessToken);
            console.log("refreshToken:", refreshToken);
            console.log("profile:", profile);
        }
    )
);


