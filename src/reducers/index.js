// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import album from './albumReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  album // should work as album: albumReducer (changed name above)
});

export default rootReducer;
