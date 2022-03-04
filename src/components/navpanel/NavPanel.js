import React, { useState } from 'react';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import { Link } from 'react-router-dom';

const ComponentLinks = [
	{
		path: '/',
		title: 'Home',
		component: <Home />,
	},
	{
		path: '/profile',
		title: 'Profile',
		component: <Profile />,
	},
];

const NavPanel = ({ user }) => {
	const [sidebarState, setSidebarState] = useState({
		expanded: true,
	});
	const closeSidebar = () =>
		setSidebarState((prev) => ({ ...prev, expanded: false }));

	const showSidebar = () =>
		setSidebarState((prev) => ({ ...prev, expanded: true }));

	return (
		<div>
			{sidebarState.expanded ? (
				<button
					class='sidebar-toggle fa-solid fa-xmark'
					onClick={(e) => {
						e.preventDefault();
						closeSidebar();
					}}
				></button>
			) : (
				<button
					class='sidebar-toggle fa-solid fa-arrow-right'
					onClick={(e) => {
						e.preventDefault();
						showSidebar();
					}}
				></button>
			)}
			<div className={'sidebar'}>
				<div
					className={`sidebar-${
						sidebarState.expanded ? ' expanded' : 'closed'
					}`}
				>
					<h4>Hey {user.name}!</h4>
					<ul className='nav nav-list'>
						{ComponentLinks.map((comp, compIndex) => (
							<div key={compIndex}>
								<li className='nav nav-item'>
									<Link to={comp.path}>{comp.title}</Link>
								</li>
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export { NavPanel, ComponentLinks };
