'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehicle extends Model {
    
    static get listAvailables() {

        return this.query().where('fl_available', true).fetch()

    }
    
}

module.exports = Vehicle
