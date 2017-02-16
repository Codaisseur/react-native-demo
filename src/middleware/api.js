// src/middleware/api.js
import 'babel-polyfill'
import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import authentication from 'feathers-authentication/client'
import io from 'socket.io-client'
import { AsyncStorage } from 'react-native'

const API_HOST = 'http://localhost:3030'

class API {
  constructor() {
    const socket = io(API_HOST, { transports: ['websocket'], forceNew: true })
    this.app = feathers()
      .configure(socketio(socket))
      .configure(hooks())
      .configure(authentication({
        type: 'local',
        // when logged in, store the token in AsyncStorage
        storage: AsyncStorage,
      }));
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate(user) {
    const { email, password } = user
    return this.app.authenticate(
      Object.assign({}, { type: 'local' }, {
      email,
      password,
    }))
  }

  signOut() {
    return this.app.logout()
  }
}

export default API
