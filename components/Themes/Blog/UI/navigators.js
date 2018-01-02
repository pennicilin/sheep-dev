import React from 'react';
import Link from 'next/link';

const navigator = () => {
	const menus = [
		{'text': 'Home', 'href': '/'},
		{'text': 'About', 'href': '/about'}
	];

	const getMenus = () => {
		return menus.map(menu => (
			<li key={menu.text}>
				<Link href={menu.href}><a>{menu.text}</a></Link>
			</li>
		));
	};

	return <ul>{getMenus()}</ul>;
};

export default navigator;