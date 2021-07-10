import {createStore,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer  from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
const enhance = applyMiddleware(thunkMiddleware)
const store = createStore(reducer,composeEnhancers(enhance))

export default store