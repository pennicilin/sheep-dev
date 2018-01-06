import React , { Component } from 'react';
import Input from '../Themes/Blog/UI/Input';
import Button from '../Themes/Blog/UI/Button';
import * as actionCreator from './store/actionCreator';
import { connect } from 'react-redux';
import { createMessage, subscribeToNewMessage } from '../Socket/api';

class SearchWeather extends Component {
	state = {
		controls : {
			'address' : {
				elementType: 'inputText',
				elementConfig: {
					fullWidth: true,
					hintText: 'Address',
				},
				value: ''
			}
		}
	};

	componentDidMount() {
		subscribeToNewMessage((err, message) => {
			console.log( message );
			this.props.onSetWeather( message );
		});
	};

	changedHandler = ( event, fromIdentifier ) => {
		// console.log( event.target.value, fromIdentifier );
		const updatedControls = {...this.state.controls};
		let  updatedElement = {...updatedControls[fromIdentifier]}
		updatedElement.value = event.target.value;
		updatedControls[fromIdentifier] = updatedElement;
		// console.log(updatedControls[fromIdentifier].value);
		this.setState({controls: updatedControls});
	};

	checkWeather = () => {
		this.props.onCheckWeather( this.state.controls.address.value, ( data ) => {
			// Set Socket Event
			// console.log('PROPS', this.props.socket );
			createMessage( data );
		} );
	};


	getControls = () => {
		let controlsArray = [];
		for ( let key in this.state.controls ) {
			controlsArray.push({id: key,...this.state.controls[key]});
		}

		const postControls = controlsArray.map( control => (
			<Input key={control.id} {...control} changed={( event ) => this.changedHandler( event,control.id )} />
		));

		return postControls;
	};

	render() {
		let weatherResult = null;
		const getWeatherResult = () => {
			if ( this.props.weather.weathers.length > 0 ) {
				weatherResult = this.props.weather.weathers.map( weather => (
					<div key={ weather.address }>
						<p>Address: { weather.address }</p>
						<p>Latitude: { weather.lat }</p>
						<p>Longitude: { weather.lng }</p>
						<hr></hr>
					</div>

				));
			}
			return weatherResult;
		};

		const getMessage = () => {
			if( this.props.weather.message ) {
				return this.props.weather.message;
			}
			return null;
		};

		return (
				<div>
					{this.getControls()}
					<Button label="Check" fullWidth={true} primary={true} onClick={this.checkWeather} />
					{  getWeatherResult() }
					<p>{  }</p>
				</div>
			);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckWeather: ( address, callback ) => dispatch(actionCreator.checkWeather( {address: address,callback: callback} )),
		onSetWeather: ( weather ) => dispatch(actionCreator.setWeather( weather )),
	}
};

const mapStateToProps = state => {
	return {
		weather: state.weather
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);