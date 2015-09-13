/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

 module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    controller: 'DashboardController',
    action : 'homepage'
  },

  /////////////////////////

  'GET /dashboard': {
    controller: 'DashboardController',
    action : 'dashboard'
  },

  'GET /panel': {
    controller: 'DashboardController',
    action: 'panel'
  },

  /////////////////////////

  'GET /login':{
    controller: 'AuthController',
    action: 'login'
  },

  'POST /login': {
    controller: 'AuthController',
    action: 'process'
  },

  /////////////////////////

  'GET /logout': {
    controller: 'AuthController',
    action: 'logout'
  },

  'GET /admin/logout': {
    controller: 'AdminController',
    action: 'logout'
  },


  ///////////////////////////////

  'GET /admin/login': {
    controller: 'AdminController',
    action: 'login'
  },

  'POST /admin/login': {
    controller: 'AdminController',
    action: 'process'
  },

  'POST /alumno/login':{
    controller: 'AlumnoController',
    action: 'process'
  },

  ////////////////////////////////

  'GET /panel/alumno': {
    controller: 'AdminController',
    action: 'alumnos'
  }, 

  'GET /panel/dasu': {
    controller: 'AdminController',
    action: 'dasu'
  },
  
  /////////////// Alumno /////////////////

  /// Create
  'GET /panel/alumno/new': {
    controller: 'AlumnoController',
    action: 'new'
  },

  'POST /panel/alumno/new': {
    controller: 'AlumnoController',
    action: 'create'
  },


  /// Read


  /// Update
  'GET /panel/alumno/update/:id': {
    controller: 'AlumnoController',
    action: 'edit'
  },

  'POST /panel/alumno/update/:id': {
    controller: 'AlumnoController',
    action: 'update'
  },

  /// Delete

  'POST /panel/alumno/destroy/:id': {
    controller: 'AlumnoController',
    action: 'destroy'
  },

  ///////////////  DASU  /////////////////

  /// Create
  'GET /panel/dasu/new': {
    controller: 'DASUController',
    action: 'new'
  },

  'POST /panel/dasu/new': {
    controller: 'DASUController',
    action: 'create'
  },


  /// Read



  /// Update

  'GET /panel/dasu/update/:id': {
    controller: 'DASUController',
    action: 'edit'
  },

  'POST /panel/dasu/update/:id': {
    controller: 'DASUController',
    action: 'update'
  },

  /// Delete 

  'POST /panel/dasu/destroy/:id': {
    controller: 'DASUController',
    action: 'destroy'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};