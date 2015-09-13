/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

 	edit: function(req, res){
 		DASU.findOne(req.param('id'), function foundUser (err, user){
 			if (err) return res.serverError(err);
 			if (!user) return res.serverError(err);

 			res.view({
 				user: user
 			});
 		})
 	},

 	update: function(req, res){
 		//console.log(req.param('url'));
 		DASU.update(req.param('id'), req.params.all(), function userUpdated(err){
 			if (err) {
 				return res.redirect('/panel/dasu/edit/'+ req.param('url'));
 			}
 			res.redirect('/dasu');
 		})
 	},

 	new: function (req, res){
 		res.view();
 	},

 	create: function (req, res, next){

 		DASU.create( req.params.all(), function userCreated(err, user){

			if(err){				
				req.session.flash = {
					err: err.invalidAttributes,
					type: 'warning'
				};

				return res.redirect('/panel/dasu/new');
			}

			req.session.flash = {
				err: ["Cuenta creada de forma exitosa."],
				type: 'success'
			}
			console.log(req.session.flash);

			res.redirect('/panel/dasu')
		})
 	},

 	show: function (req, res, next){
 		DASU.findOne(req.param('id'), function foundUser(err, user){
 			if (err) return next(err);
 			if (!user) return next();
 			res.view({
 				user: user
 			})
 		})
 	},

 	destroy: function (req, res, next){
 		DASU.findOne(req.param('id'), function foundUser (err, user){
 			if (err) return next(err);

 			if (!user) return next('El usuario no existe');

 			DASU.destroy(req.param('id'), function userDestroyed(err){
 				if (err) return next(err);
 			});

 			res.redirect('/panel/dasu');
 		})
 	}
 };
