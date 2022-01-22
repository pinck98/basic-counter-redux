import {applyMiddleware, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../Redux/reducers/index'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)))

export default store