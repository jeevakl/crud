'use strict'

const User = use('App/Models/User')
const Role = use('Role')

class UserController {
  async list ({ view, auth }) {
    var users = User.query()
      .with(['roles'])

    if (!await auth.user.is('admin')) {
      users = users.where('id', auth.user.id)
    }

    users = await users.fetch()

    return view.render('user.list', {
      users: users.toJSON()
    })
  }

  async form ({ request, view }) {
    const { id } = request.all()

    const roles = await Role.all()

    let user = new User()
    if (id) {
      user = await User.query()
        .where('id', id)
        .with(['roles'])
        .first()
    }

    return view.render('user/form', {
      roles: roles.toJSON(),
      user: user.toJSON()
    })
  }

  async save ({ request, response }) {
    const requestData = request.all()

    let user
    if (requestData.id) {
      user = await User.query()
        .where('id', requestData.id)
        .first()
    }
    else {
      user = new User()
    }

    user.name = requestData.name
    user.email = requestData.email
    if (requestData.password) {
      user.password = requestData.password
    }

    await user.save()

    await user.roles().sync([requestData.role])

    return response.route('/user/list')
  }

  async delete ({ request, response }) {
    const { id } = request.all()

    await User.query()
      .where('id', id)
      .delete()

    return response.route('/user/list')
  }
}

module.exports = UserController
