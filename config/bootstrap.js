/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

 module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  //if ( sails.config.environment == 'development' ) {

  		// create dummy Admin and reports

  		var dummy = {
  			nombre : 'daniel torres',
  			usuario: 'daniel',
  			password: 'lalala'
  		}

  		Admin.count().exec(function(err, count){
  			if(err) return cb(err)
  				if(count > 0) return cb();

  			Admin.create(dummy).exec(cb)
  		})

  		var categorias = [{
  			tipo: 'Vandalismo',
  		},
  		{
  			tipo: 'Incendio'
  		},
  		{
  			tipo: 'Accidente vial'
  		},
  		{
  			tipo: 'Accidente peatonal'
  		},
  		{
  			tipo: 'Emergencia Médica'
  		},
  		{
  			tipo: 'Robo/Asalto'
  		},
  		{
  			tipo: 'Otro'
  		}]

  		Categoria.count().exec(function(err, count){
  			if(err) return cb(err)
  				if(count > 0) return cb();

  			Categoria.create(categorias).exec(cb)
  		})

  		/*var dummyAlumno = {
  			matricula: 200936543,
  			nombre: "bae",
  			facultad: "Adm. Publica y Cs. Politicas",
  			correo: "daniel@asd.com",
  			tipo: "Alumno",
  			password: 'lalala'
  		}

  		Alumno.count().exec(function(err, count){
  			if(err) return cb(err)
  				if(count > 0) return cb();

  			Alumno.create(dummyAlumno).exec(cb)
  		})


		var dummyReports = [
			{
				titulo: "nuevo nuevo",
				descripcion: "Estacionado sobre la ciclovia, placa 32R-3Y0",
				latitud: "19.000919790709460",
				longitud: "-98.20422176169161",
				tipo: "Transito",
				enviadoPor: 200936800
			},
			{
				titulo: "K4M 0Z4",
				descripcion: "asdasd Lorem ipsum",
				latitud: "-87.15345",
				longitud: "-88.89966",
				tipo: "Nam",
				enviadoPor: 200936800
			},
			{
				titulo: "T1M 8N9",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laboriosam sapiente, praesentium, enim beatae, autem iusto assumenda sit quod perspiciatis dolorum minus sunt voluptate tenetur odit vero neque! Provident, libero!Lorem ipsum",
				latitud: "4.38436",
				longitud: "158.73527",
				tipo: "justo",
				enviadoPor: 200936800
			},
			{
			titulo: "Q7A 0T7",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab repellendus excepturi quam, architecto vel provident neque maxime, temporibus quis repudiandae, minima eos! Blanditiis quas libero voluptas ducimus ab tenetur facilis?Lorem ipsum",
				latitud: "42.11577",
				longitud: "89.59358",
				tipo: "pharetra",
				enviadoPor: 200936800
			},
			{
				titulo: "P0X 7G6",
				descripcion: "Lorem ipsum",
				latitud: "-65.85734",
				longitud: "179.34597",
				tipo: "commodo",
				enviadoPor: 200936800
			},
			{
				titulo: "K4F 4I4",
				descripcion: "Lorem ipsum dolor sit",
				latitud: "21.31942",
				longitud: "2.95288",
				tipo: "Nunc",
				enviadoPor: 200936800
			}
		];

		Report.count().exec(function(err, count){
			if (err) cb(err)
			if (count > 0) cb();

			Report.create(dummyReports).exec(cb);
		})*/


//}


cb();
};
