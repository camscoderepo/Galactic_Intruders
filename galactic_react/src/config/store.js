import { createStore, combineReducers } from 'redux'
import shipReducer from '../components/ship/Ship'

const rootReducer = combineReducers({
    ship: shipReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;