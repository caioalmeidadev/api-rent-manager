'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiclesSchema extends Schema {
  up () {
    this.create('vehicles', (table) => {
      table.increments()
      table.string('name')
      table.boolean('fl_status')
      table.enum('fl_fuel',['GASOLINA','ALCOOL','FLEX','DIESEL'])
      table.string('model')
      table.string('brand')
      table.string('color')
      table.string('chassis')
      table.string('year')
      table.string('palte')
      table.decimal('daily_price',['10','4'])
      table.boolean('fl_available')
      table.integer('inital_km').unsigned()
      table.integer('actual_km').unsigned()
      table.decimal('bought_price',['10','4'])
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicles')
  }
}

module.exports = VehiclesSchema
