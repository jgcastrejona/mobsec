/**
* Alumno.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcryptjs');
var Hashids = require('hashids');
var hashids = new Hashids("super salt")

module.exports = {
	tableName: 'alumno',

	/*types: {
		password: function(password) {
			return password === this.passwordConfirmation;
		}
	},*/

	schema: true,

	attributes: {
		
		nombre: {
			type: "string",
			required: true
		},
		
		matricula: {
			type: 'integer',
			required: true,
			unique: true,
		},

		facultad: {
			type: 'string',
			required: true
		},

		imagenPerfil: {
			type: 'string',
			url: true
		},

		activo: {
			type: 'integer',
			protected: true
		},

		correo: {
			type: 'string',
			required: true,
			unique: true,
			email: true
		},

		password: {
			type: 'string',
			//minLength: 6,
			//password: true,
			protected: true
		},

		reportes: {
			collection: 'Report',
			via: 'enviadoPor'
		},

		/*passwordConfirmation: {
			type: 'string',
			//minLength: 6,
			protected: true
		},*/

		tipo: {
			type: 'string',
		},

		url: {
			type: 'string'
		}



		/*report: {
			collection: 'report',
			via: 'user'
		}*/
	},

	beforeCreate: function(user, cb) {
		bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(user.password, salt, function(err, hash) {
				if(err) {
					//console.log(err);
					cb(err);
				} else {
					user.password = hash;
					//console.log(hash);
					cb(null, user);
				}
			});
		});

		user.tipo = "Alumno";
	},

	afterCreate : function(obj, cb){
		Alumno.findOne(obj.id, function(err, object){
			var hex = Buffer( obj.id.toString() ).toString('hex')
			object.url = hashids.encodeHex(hex)
			
			object.save(function(err){
				if (err) {
					console.log(err);
				}
			})
		})

		cb(null, obj)
	}


}