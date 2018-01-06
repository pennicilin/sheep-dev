import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setWeather = ( payload ) => {
	return {
		type: actionTypes.SET_WEATHER,
		payload: payload
	}
};

export const setWeatherEnd = ( payload ) => {
	return {
		type: actionTypes.SET_WEATHER_END,
		payload: payload
	}
};

export const checkWeather = ( payload ) => {
	return dispatch => {
		
		axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + payload.address)
			.then( response => {
				console.log( response.data );
				const responseData = response.data;
				const locationInfo = {
					address: responseData.results[0].formatted_address,
					lat: responseData.results[0].geometry.location.lat,
					lng: responseData.results[0].geometry.location.lng,
				}
				dispatch(setWeather( {weather: locationInfo} ));
				payload.callback( {weather: locationInfo} );
				// dispatch(setSocketEvent( {weather: locationInfo} ));
			}).catch( error => {
				console.log( error );
			});
	};
}