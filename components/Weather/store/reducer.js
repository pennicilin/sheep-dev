import * as actionTypes from './actionTypes';
import * as actionCreator from './actionCreator';

const initialState = {
					weathers: []
				};

const reducer = (state = initialState, action) => {
	let newState;
	switch ( action.type ) {
		case actionTypes.SET_WEATHER :
			console.log("PAYLOAD",action.payload);
			newState = {...state};
			newState.weathers.push(action.payload.weather);
			return newState;
			
	}
	return state;
}

export default reducer;