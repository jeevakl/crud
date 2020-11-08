'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group('auth', function () {
  Route.get('login', 'AuthController.login')
  Route.post('login', 'AuthController.authenticate')
})
.prefix('auth')
.middleware('guest')

Route.group('auth-guest', function () {
  Route.get('logout', 'AuthController.logout')
})
.prefix('auth')
.middleware('auth')

Route.group('user', function () {
  Route.get('/list', 'UserController.list')
  Route.get('/form', 'UserController.form')
  Route.post('/form', 'UserController.save')
  Route.get('/delete', 'UserController.delete')
})
.prefix('user')
.middleware('auth')

