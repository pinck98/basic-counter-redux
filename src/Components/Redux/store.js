import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

//const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)))

const store = configureStore({
    reducer : {
        counter : counterSlice,
    }
})

export default store