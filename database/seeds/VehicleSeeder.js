'use strict'

/*
|--------------------------------------------------------------------------
| VehicleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class VehicleSeeder {
  async run () {
    const vehicles = await Factory.model('App/Models/Vehicle').createMany(5)
    console.log(vehicles);
  }
}

module.exports = VehicleSeeder
