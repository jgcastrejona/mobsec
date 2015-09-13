var passport = require('passport');
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

 	/*index: function(req, res){

 		User.find(function foundUser(err, users){
 			if (err) return res.serverError(err);
 			res.view({users: users})
 		})
 	},*/

 	edit: function(req, res){
 		res.locals.layout = 'layouts/alumno.ejs';

 		Alumno.findOne(req.param('id'), function foundUser (err, user){
 			
 			if (err) return res.serverError(err);
 			if (!user) return res.serverError(err);

 			res.view({
 				user: user
 			});
 		})
 	},

 	update: function(req, res){
 		//console.log(req.params.all());
 		Alumno.update(req.param('id'), req.params.all(), function userUpdated(err){
 			if (err) {
 				return res.redirect('/alumno/update/'+ req.param('id'));
 			}
 			res.redirect('/alumno');
 		})
 	},

 	new: function (req, res){
 		res.locals.layout = 'layouts/alumno.ejs';
 		res.view();
 	},

 	create: function (req, res, next){

 		Alumno.create( req.params.all(), function userCreated(err, user){

			// If Error
			if(err){
				//console.log(err.toJSON());
				//console.log(err);
				console.log(err.invalidAttributes);
				
				req.session.flash = {
					err: err.invalidAttributes,
					type: 'warning'
				};

				return res.redirect('/panel/alumno/new');
			}

			//req.session.authenticated = true;
			//req.session.User = user

			//success
			//res.json(user);
			req.session.flash = {
				err: ["Cuenta creada de forma exitosa."],
				type: 'success'
			}

			return res.redirect('/panel/alumno')
		})
 	},

 	show: function (req, res, next){
 		Alumno.findOne(req.param('id'), function foundUser(err, user){
 			if (err) return next(err);
 			if (!user) return next();
 			res.view({
 				user: user
 			})
 		})
 	},

 	destroy: function (req, res, next){
 		Alumno.findOne(req.param('id'), function foundUser (err, user){
 			if (err) return next(err);

 			if (!user) return next('El usuario no existe');

 			Alumno.destroy(req.param('id'), function userDestroyed(err){
 				if (err) return next(err);
 			});

 			res.redirect('/alumno');
 		})
 	},

 	process: function(req, res){
		passport.authenticate('alumno', function(err, user, info) {
            if( (err) || (!user) ) {
                //console.log(info)
                req.session.flash = {
                    err:  [info.message],
                    type: 'warning'
                };

                return res.send(req.session.flash);
            }

            req.logIn(user, function(err) {
                if(err) res.send(err);
                return res.send(user)
            });
        }) (req, res);
	},
 };
