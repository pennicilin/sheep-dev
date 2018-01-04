import React, { Component } from 'react';
// import Posts from '../../components/Posts/Posts';
import SearchWeather from '../../components/Weather/searchWeather';
import withLayout from '../../components/hoc/layout';
import withRedux from 'next-redux-wrapper';
import initStore from '../../store/initStore';

class WeatherPage extends Component {
	
	render() {
		
		return (
			<section>
				<SearchWeather />
			</section>
		);
	}
};

const mapStateToProps = ( state ) => {
	return {
		// post: state.post,
		weather: state.weather
	}
};
export default withRedux(initStore, mapStateToProps)(withLayout(WeatherPage));
