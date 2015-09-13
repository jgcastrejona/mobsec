var passport = require('passport');

/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	login: function(req, res){
		res.view();
	},

	process: function(req, res){
		passport.authenticate('admin', function(err, user, info) {
            if( (err) || (!user) ) {

                req.session.flash = {
                    err:  [info.message],
                    type: 'warning'
                };

                return res.redirect('/admin/login');
            }

            req.logIn(user, function(err) {
                if(err) res.send(err);

                req.session.flash = {
                    err:  ["Bienvenido admin"],
                    type: 'success'
                };

                return res.redirect('/panel')
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
        //res.send('logout successful');
    },

    alumnos: function(req, res){
        Alumno.find(function foundUser(err, users){
            if (err) return res.serverError(err);
            res.view({users: users})
        })
    },

    dasu: function(req, res){
        DASU.find(function foundUser(err, users){
            if (err) return res.serverError(err);
            res.view({users: users})
        })
    }
};

