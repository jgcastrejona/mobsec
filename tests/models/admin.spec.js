var Admin = require('../../api/models/Admin'),
	sinon = require('sinon'),
	assert = require('assert');

describe('El modelo Admin', function(){
	describe('antes de un admin sea creado', function(){
		it('debera encriptar el password usando bcryptjs', function(done){
			Admin.beforeCreate({
				password: 'password'
			}, function(err, admin){
				assert.notEqual(admin.password, 'password');
				done();
			})
		})
	})
})