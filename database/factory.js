'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')
 const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker,i,data) => {
  return {
    username: faker.username(),
    email: data.email,
    password: await Hash.make('adminadmin')
  }
 })


 Factory.blueprint('App/Models/Vehicle', async (faker) => {
    return {
      name: faker.name(),
      fl_status: faker.bool(),
      model: faker.word(),
      brand: faker.word(),
      color: faker.word(),
      year: faker.year(),
      palte: faker.word(),
      daily_price: faker.floating({min:0,max:100,fixed:4}),
      bought_price: faker.floating({min:0,max:100,fixed:4}),
      fl_available: true,
      fl_fuel: 'GASOLINA'
    } 
  })



