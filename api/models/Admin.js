/**
* Admin.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcryptjs');

module.exports = {

	tableName: 'admin',

	schema: true,

	attributes: {
		
		nombre: {
			type: "string",
			required: true
		},

		usuario: {
			type: "string",
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
			defaultsTo: 'Admin'
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

		user.tipo = "Admin";
	}

}