import React from 'react';
import IconButton from 'material-ui/IconButton';
import MtrDeleteButton from 'material-ui/svg-icons/action/delete';
import { grey500 } from 'material-ui/styles/colors';

const deteleButton = ( props ) => (
	<IconButton 
		tooltip='Delete'
		onClick={props.clicked} >
		<MtrDeleteButton color={grey500} />
    </IconButton>
);

export default deteleButton;