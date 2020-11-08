'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Role = use('Role')
class RoleSeeder {
  async run () {
    const roleAdmin = new Role()
    roleAdmin.name = 'Admin'
    roleAdmin.slug = 'admin'
    roleAdmin.description = 'manage admin privileges'
    await roleAdmin.save()


    const roleUser = new Role()
    roleUser.name = 'User'
    roleUser.slug = 'user'
    roleUser.description = 'manage user privileges'
    await roleUser.save()
  }
}

module.exports = RoleSeeder
