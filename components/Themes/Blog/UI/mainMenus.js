import React from 'react';
import Link from 'next/link';
import Button from './Button';

const mainMenus = () => {
	const menus = [
		{'text': 'Posts', 'href': '/posts', configs: {primary: false}},
		{'text': 'Add Post', 'href': '/posts/create', configs: {primary: true}}
	];

	const getMenus = () => {
		return menus.map(menu => (
			<Link key={menu.text} href={menu.href}><Button style={{margin: '0 10px'}}  label={menu.text} {...menu.configs} /></Link>
		));
	};

	return <div style={{"textAlign": 'center'}}>{getMenus()}</div>;
};

export default mainMenus;