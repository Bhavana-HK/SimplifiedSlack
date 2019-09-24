import {combineReducers} from 'redux'
import slack from './slack'

var reducer = combineReducers({
    slack,
})

export default reducer;