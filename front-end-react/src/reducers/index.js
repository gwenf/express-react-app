import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import studentReducer from './studentReducer'

const appReducer = combineReducers({
  form: formReducer,
  studentReducer
})

const studentManagementApp = (state, action) => {
	return appReducer(state, action)
}

export default studentManagementApp

