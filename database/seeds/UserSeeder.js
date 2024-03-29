'use strict'

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
const Hash = use('Hash')

class UserSeeder {
  async run () {
    const users = await Factory.model('App/Models/User').create({
      email: 'ggvital@admin.com'
    })
    console.log(users);

  }
}

module.exports = UserSeeder
