'use strict'

const Vehicle = use('App/Models/Vehicle')

class VehicleController {

    async index ({response}) {
        response.json(await Vehicle.all())
    }

    async store({request,response}) {
        
        let data = request.all()

        const newVehicle = new Vehicle
        newVehicle.name = data.name
        newVehicle.fl_fuel = data.fl_fuel
        newVehicle.model = data.model
        newVehicle.brand = data.brand
        newVehicle.year = data.year
        newVehicle.fl_status = data.fl_status
        newVehicle.color = data.color
        newVehicle.palte = data.palte
        newVehicle.fl_available = data.fl_available
        newVehicle.daily_price = data.daily_price
        newVehicle.bought_price = data.bought_price
        await newVehicle.save()
        return response.json(newVehicle)    

    }

    async update({request,response}) {
        
        let data = request.all()
        const vehicle = await Vehicle.findOrFail(request.params.id)
        vehicle.merge(data)
        await vehicle.save()

        return response.json(vehicle)

    }

    async listAvailables({request,response}) {
        const vehicleAvailables = await Vehicle.query().where('fl_available', true).fetch()
        return response.json(vehicleAvailables)
    }
}

module.exports = VehicleController
