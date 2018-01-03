import React, { Component } from 'react';
import Input from '../Themes/Blog/UI/Input';
import Button from '../Themes/Blog/UI/Button';
import Aux from '../hoc/Auxs';
import withRedux from 'next-redux-wrapper';
import initStore from '../../store/initStore';

class PostControls extends Component {
	
	state = {
		controls : {
			'title' : {
				elementType: 'inputText',
				elementConfig: {
					fullWidth: true,
					hintText: 'ชื่อบทความ',
				},
				value: ''
			},
			'content' : {
				elementType: 'inputText',
				elementConfig: {
					fullWidth: true,
					hintText: 'รายละเอียด',
					multiLine: true,
					rows: 4,
					rowsMax: 8
				},
				value: ''
			}
		}
	};

	componentDidMount() {
		console.log('Component Did Mount', this.state.controls.title);
	}

	changedHandler = ( event, fromIdentifier ) => {
		// console.log( event.target.value, fromIdentifier );
		const updatedControls = {...this.state.controls};
		let  updatedElement = {...updatedControls[fromIdentifier]}
		updatedElement.value = event.target.value;
		updatedControls[fromIdentifier] = updatedElement;
		// console.log(updatedControls[fromIdentifier].value);
		this.setState({controls: updatedControls});
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
		return (
			<Aux>
				<div style={{width: '80%',margin: 'auto'}}>
					{this.getControls()}
					<Button label="เพิ่มบทความ" fullWidth={true} primary={true} onClick={() => this.props.postSubmitHandler(this.state.controls)} />
				</div>
				
			</Aux>
		)
	}
};

export default PostControls;