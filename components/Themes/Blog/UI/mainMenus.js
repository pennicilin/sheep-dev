import React from 'react';
import Link from 'next/link';

const mainMenus = () => {
	const menus = [
		{'text': 'Posts', 'href': '/posts'},
		{'text': 'Add Post', 'href': '/posts/create'}
	];

	const getMenus = () => {
		return menus.map(menu => (
			<li key={menu.text}>
				<Link href={menu.href}><button>{menu.text}</button></Link>
			</li>
		));
	};

	return <ul>{getMenus()}</ul>;
};

export default mainMenus;