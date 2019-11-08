'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('company_name',120).notNullable()
      table.string('facade_name',120).notNullable()
      table.string('phone_1',14)
      table.string('phone_2',14)
      table.string('cpf_cnpj',14)
      table.string('rg',12)
      table.string('rg_uf',2)
      table.string('rg_emitter',45)
      table.string('driver_licence',45)
      table.string('ref_contact_name_1',120)
      table.string('ref_contact_phone_1',12)
      table.string('ref_contact_name_2',120)
      table.string('ref_contact_phone_2',12)
      table.string('fl_person',1).notNullable()
      table.string('address',160)
      table.string('number_address',8)
      table.string('cep',10)
      table.string('obs')
      table.string('estate_insc',14)
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
