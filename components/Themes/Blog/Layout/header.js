
import React from 'react';
import Head from 'next/head';
import Aux from '../../../hoc/Auxs';

const header = () => (
	<Aux>
		<Head>
			<title>My First React & NextJs Blog.</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			<link href="https://fonts.googleapis.com/css?family=Kanit|Roboto:300,400,500" rel="stylesheet" />
		</Head>
		<div>
			<h1>My Blog</h1>
		</div>
		<style global jsx>{`
	      body {
	        font-family: Kanit;
	        margin: 0;
	        padding: 0;
	      }
	    `}</style>
	</Aux>
);

export default header;