/**
* DashboardController
*
* @description :: Server-side logic for managing Dashboards
* @help        :: See http://links.sailsjs.org/docs/controllers
*/

var moment = require('moment');

module.exports = {

    dashboard: function(req, res){

        if (req.param('fechaDe') != null || req.param('fechaDe') != undefined || req.param('fechaA') != null || req.param('fechaA') != undefined) {

            var fechaDe = moment(req.param('fechaDe'), "YYYY-MM-DD").utcOffset(0).format("MM/DD/YYYY").toString();
            //var ayer = moment( fechaDe, "MM/DD/YYYY" ).add(-1, 'days').format("MM/DD/YYYY").toString();
            var fechaA = moment( req.param('fechaA'), "YYYY-MM-DD" ).add(1, 'days').utcOffset(0).format("MM/DD/YYYY").toString();
            var categorias = Categoria.find().then(function(allData){
                return allData
            })

            Report.find({

                createdAt: {
                    '>=': new Date(fechaDe), '<=': new Date(fechaA)
                },
                tipo: {
                    'contains' : req.param('tipo')
                },
                sort: 'createdAt DESC'
            })
            .populate('enviadoPor')
            .exec(function findReports(err, reports){
                if (err) return res.serverError(err);
                res.locals.layout = 'layouts/dasu';

                res.view('dashboard/dashboard', {
                    reportes: reports, 
                    moment: moment, 
                    fechaDe: moment(fechaDe, "MM/DD/YYYY").format('YYYY-MM-DD'), 
                    fechaA: moment(fechaA, "MM/DD/YYYY").add(-1, 'days').format('YYYY-MM-DD'), 
                    tipo: req.param('tipo'), 
                    categorias: categorias 
                });
            })

        }

        else{
            var hoy = moment().format("MM/DD/YYYY").toString()
            var mañana = moment().add(1, 'days').format("MM/DD/YYYY").toString()

            var categorias = Categoria.find().then(function(allData){
                return allData
            })

            Report.find({
                createdAt:
                { '>=': new Date(hoy), '<': new Date(mañana) },
                //createdAt:
                //	{'>' : new Date()},
                sort:
                'createdAt DESC'
            })
            .populate('enviadoPor')
            .exec(function findReports(err, reports){
                if (err) return res.serverError(err);
                res.locals.layout = 'layouts/dasu';
                console.log(err)
                console.log(res.serverError);

                res.view('dashboard/dashboard', {
                    reportes: reports, 
                    moment: moment, 
                    fechaDe: moment(hoy, "MM/DD/YYYY").format('YYYY-MM-DD'),
                    fechaA: moment(hoy, "MM/DD/YYYY").format('YYYY-MM-DD'),
                    tipo: "", 
                    categorias: categorias 
                });
            })
        }

    },

    homepage: function(req, res){
        res.view('homepage');
    },

    panel: function(req, res){
        res.view('dashboard/admin');
    }
};
