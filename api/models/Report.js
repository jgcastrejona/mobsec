/**
* Report.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'report',

	schema: true,

	attributes: {

		titulo: {
			type: 'string',
			required: true
		},

		descripcion: {
			type: 'string'
		},

		imagen: {
			type: 'string',
			url: true
		},

		latitud: {
			type: 'string'
		},

		longitud: {
			type: 'string'
		},

		tipo: {
			type: 'string'
		},

		enviadoPor: {
			model: 'Alumno',
			required: true
		}

	},

	afterCreate : function(obj, cb){
		Report.findOne(obj.id, function(err, object){
	
			object.save(function(err){
				if (err) {
					console.log(err);
				}
			})

		})

		cb(null, obj)
	}
};

