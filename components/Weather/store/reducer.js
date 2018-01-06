import * as actionTypes from './actionTypes';
import * as actionCreator from './actionCreator';

const initialState = {
					weathers: [],
					message: null,
					socket: null
				};

const reducer = (state = initialState, action) => {
	let newState;
	switch ( action.type ) {
		case actionTypes.SET_WEATHER :
			// console.log("PAYLOAD",action.payload);
			newState = {...state};
			newState.weathers = [];
			newState.weathers.push(action.payload.weather);
			return newState;

		case actionTypes.SET_WEATHER_END :
			newState = {...state};
			newState.message = action.payload.message;
			return newState;

		case actionTypes.UPDATE_WEATHER :
			newState = {...state};
			newState.socket = action.payload.socket;
			return newState;
			
	}
	return state;
}

export default reducer;