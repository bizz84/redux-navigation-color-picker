import { combineReducers } from 'redux';
import ColorReducer from './ColorReducer';
import NavReducer from './NavReducer';

const AppReducer = combineReducers({
  color: ColorReducer,
  nav: NavReducer,
});

export default AppReducer;