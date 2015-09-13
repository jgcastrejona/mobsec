var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcryptjs');
var tipousuario = "";

passport.serializeUser(function(user, done) {
	tipoUsuario = _.clone(user.tipo)
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	if(tipoUsuario == 'DASU'){
		DASU.findById(id, function(err, user){
			if(err) done(err);
			done(null, user)
		})
	}

	if (tipoUsuario == 'Alumno') {
		Alumno.findById(id, function(err, user){
			if(err) done(err);
			done(null, user)
		})
	}

	if  (tipoUsuario == 'Admin') {
		Admin.findById(id, function(err, user){
			if(err) done(err);
			done(null, user)
		})
	}

});

passport.use('user', new LocalStrategy({
	usernameField: 'usuario',
	passwordField: 'password'
},

//Usuario y Password son los nombres de los campos a buscar en la BD
function(usuario, password, done) {
	DASU.findOne({ usuario: usuario }).exec(function(err, user) {
		if(err) {
			return done(err);
		}
		if(!user) {
			return done(null, false, { message: 'No existe el usuario ' + usuario }); 
		}

		bcrypt.compare(password, user.password, function(err, res) {
			if(!res) return done(null, false, {message: 'Password o usuario invalidos'});
			return done(null, user);
		});
	});
}
));

passport.use('admin', new LocalStrategy({
	usernameField: 'usuario',
	passwordField: 'password'
},

function(usuario, password, done){
	Admin.findOne({ usuario: usuario }).exec(function(err, user) {
		if(err) {
			return done(err);
		}
		if(!user) {
			return done(null, false, { message: 'No existe el admin ' + usuario }); 
		}

		bcrypt.compare(password, user.password, function(err, res) {
			if(!res) return done(null, false, {message: 'Password o usuario invalidos'});
			return done(null, user);
		});
	});
}
));

passport.use('alumno', new LocalStrategy({
	usernameField: 'usuario',
	passwordField: 'password'
},

function(usuario, password, done){
	Alumno.findOne({ matricula: usuario }).exec(function(err, user) {
		if(err) {
			return done(err);
		}
		if(!user) {
			return done(null, false, { message: 'No existe el alumno ' + usuario }); 
		}

		bcrypt.compare(password, user.password, function(err, res) {
			if(!res) return done(null, false, {message: 'Password o usuario invalidos'});
			return done(null, user);
		});
	});
}
));