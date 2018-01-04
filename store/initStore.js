import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from '../components/Posts/store/reducer';
import weatherReducer from '../components/Weather/store/reducer';

const initStore = () => {

	const rootReducer = combineReducers({
		'post': postReducer,
		'weather': weatherReducer,
		// 'merchants': merchantReducer,
		// 'webUI': webUiReducer
	});
	const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default initStore;
