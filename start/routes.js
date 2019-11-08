'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/vehicles', 'VehicleController.index')
Route.post('/vehicles/store', 'VehicleController.store')
Route.put('/vehicles/:id', 'VehicleController.update')
Route.get('/vehicles/availables','VehicleController.listAvailables')


Route.get('/customers', 'CustomerController.index')

Route.post('login','UserController.login').middleware('guest')

Route.get('/user/:id', 'UserController.show').middleware('auth')
