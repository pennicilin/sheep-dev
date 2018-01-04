import React , { Component } from 'react';
import Input from '../Themes/Blog/UI/Input';
import Button from '../Themes/Blog/UI/Button';
import * as actionCreator from './store/actionCreator';
import { connect } from 'react-redux';

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
		this.props.onCheckWeather( this.state.controls.address.value );
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

		const getWeather = () => {
			const weathers = this.props.weather.weathers.map( weather => (
					<div key={ weather.address }>
						<p>Address: { weather.address }</p>
						<p>Latitude: { weather.lat }</p>
						<p>Longitude: { weather.lng }</p>
						<hr></hr>
					</div>

				));
			return weathers;
		};

		return (
				<div>
					{this.getControls()}
					<Button label="Check" fullWidth={true} primary={true} onClick={this.checkWeather} />
					{
						( this.props.weather.weathers.length > 0 ) ? getWeather() : <p></p>
					}
				</div>
			);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckWeather: ( address ) => dispatch(actionCreator.checkWeather( {address: address} ))
	}
};

const mapStateToProps = state => {
	return {
		weather: state.weather
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);