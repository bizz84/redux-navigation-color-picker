import { combineReducers } from 'redux';
import NavReducer from './NavReducer';

const AppReducer = combineReducers({
  nav: NavReducer,
});

export default AppReducer;