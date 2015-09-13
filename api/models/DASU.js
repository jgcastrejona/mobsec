/**
* DASU.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcryptjs');
var Hashids = require('hashids');
var hashids = new Hashids("super salt")

module.exports = {
	
	tableName: 'dasu',

	schema: true,

	attributes: {
		
		nombre: {
			type: "string",
			required: true
		},

		usuario: {
			type: 'string',
			alphanumeric: true,
			required: true,
			unique: true
		},

		password: {
			type: 'string',
			//password: true,
			protected: true
		},

		tipo: {
			type: 'string',
		},

		url: {
			type: 'string'
		}
		
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

		user.tipo = "DASU";

	},

	afterCreate : function(obj, cb){
		DASU.findOne(obj.id, function(err, object){
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