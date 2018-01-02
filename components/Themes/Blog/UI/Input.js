import React from 'react';
import TextField from 'material-ui/TextField';

const input = ( props ) => {
	switch ( props.elementType ) {
		case 'inputText':
			return <TextField {...props.elementConfig} onChange={ props.changed } />;
		default:
			return <TextField {...props.elementConfig} onChange={ props.changed } />;
	}
};

export default input;