'use strict'

const User = use('App/Models/User')

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    const admin = new User()
    admin.name = 'admin'
    admin.email = 'admin@gmail.com'
    admin.password = '123456'
    await admin.save()

  }
}

module.exports = UserSeeder
