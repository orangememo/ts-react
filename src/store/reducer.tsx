import { combineReducers } from 'redux'
import HomeReducer from './home/reducer'

const reducer = combineReducers({
	Home: HomeReducer,
})
export default reducer
