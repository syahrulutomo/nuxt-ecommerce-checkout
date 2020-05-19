import { Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './modules'

export default () => new Store({ plugins: [createPersistedState()], modules })
