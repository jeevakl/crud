'use strict'

class AuthController {
  async login ({ view }) {
    return view.render('auth/login')
  }

  async authenticate ({ request, response, auth }) {
    const requestData = request.all()

    await auth.attempt(requestData.email, requestData.password)

    return response.route('/user/list')    
  }

  async logout ({ auth, response }) {
    await auth.logout()

    return response.route('/auth/login')
  }
}

module.exports = AuthController
