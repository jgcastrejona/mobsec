var passport = require('passport');

/**
 * AuthController
 *
 * @description :: Server-side logic for managing auth
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    login: function(req, res){
        res.view();
    },
    
    process: function(req, res){
        passport.authenticate('user', function(err, user, info) {
            if( (err) || (!user) ) {

                req.session.flash = {
                    err:  [info.message],
                    type: 'warning'
                };
                
                return res.redirect('/login');
            }

            req.logIn(user, function(err) {
                if(err) res.send(err);

                req.session.flash = {
                    err:  ["Bienvenido"],
                    type: 'success'
                };
                
                return res.redirect('/dashboard')
            });
        }) (req, res);
    },

    logout: function(req, res) {
        req.logOut();
        req.session.flash = {
            err:  ["Sesión cerrada, esperamos verte pronto"],
            type: 'success'
        };
        return res.redirect('/');
    }
};