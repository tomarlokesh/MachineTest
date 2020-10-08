// Imports: Dependencies
import { combineReducers } from 'redux';
import loginReducer from './loginReducers';

// Redux: Root Reducer
const rootReducer = combineReducers({
  user: loginReducer,
});

// Exports
export default rootReducer;