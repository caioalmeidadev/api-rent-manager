'use strict'
const Customer = use('App/Models/Customer')

class CustomerController {

    async index({request,response}) {
        const customer = await Customer.all()

        return response.json(customer)
    }
}

module.exports = CustomerController
