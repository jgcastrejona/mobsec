var DashboardController = require('../../api/controllers/DashboardController'),
sinon = require('sinon'),
assert = require('assert');

describe('El controlador Dashboard', function(){
	describe('cuando carguemos la url /', function(){
		it('debera renderear la vista "homepage"', function(){
			var view = sinon.spy();
			DashboardController.homepage(null, {
				view: view
			})

			assert.ok(view.called);
		})
	})
})


describe('El controlador Dashboard', function(){
	describe('cuando carguemos url /panel', function(){
		it('debera renderear la vista "/dashboard/panel"', function(){
			var view = sinon.spy();
			DashboardController.panel(null, {
				view: view
			})

			assert.ok(view.called);
		})
	})
})

