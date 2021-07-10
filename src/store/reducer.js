import { combineReducers} from 'redux-immutable'
import {reducer as recommenderReducer} from '@/views/discover/discover-page/recommend/store/index.js'
import {reducer as playerReducer} from '@/views/player/store/index'

const cReducer = combineReducers({
    recommends:recommenderReducer,
    player:playerReducer
})
export default cReducer