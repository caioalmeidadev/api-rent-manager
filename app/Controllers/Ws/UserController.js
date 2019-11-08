'use strict'

class UserController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async login({auth, request}) {
    const {email, password} = request.all()
    await auth.attempt(email,password)

    return 'Logged in successfully'
  }

  async show({auth,params}) {
    if(auth.user.id !== Number(params.id)){
      return 'Sem ver dados de outros'
    }
    return auth.user
  }
}

module.exports = UserController
