import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarMenuItems from './sidebarMenuItems';
import './sidebarStyle.scss';

export const Item = ({
	path,
	title,
	icon,
	sidebarState,
	isActive,
	updateActivePath,
}) => (
	<li
		className={`menu-item ${isActive ? 'active' : ''}`}
		onClick={() => updateActivePath()}
	>
		<Link to={path}>
			<span
				style={{
					display: 'flex',
					alignItems: 'baseline',
					marginLeft: '10px',
				}}
			>
				<span className='menu-item-icon'>
					<i className={`fa fa-${icon}`} />
				</span>
				<span
					className={`menu-item-title ${
						sidebarState.expanded ? 'expanded' : 'collapsed'
					}`}
				>
					{title}
				</span>
			</span>
		</Link>
	</li>
);

const Sidebar = () => {
	const [sidebarState, setSidebarState] = useState({
		expanded: true,
		activePath: window.location.pathname,
	});
	const closeSidebar = () =>
		setSidebarState((prev) => ({ ...prev, expanded: false }));

	const showSidebar = () =>
		setSidebarState((prev) => ({ ...prev, expanded: true }));


	return (
		<div className={'wrapper-sidebar'}>
			<span className='wrapper-menu-toggle'>
				{sidebarState.expanded ? (
					<button
						className='sidebar-toggle fa-solid fa-xmark'
						onClick={(e) => {
							e.preventDefault();
							closeSidebar();
						}}
					></button>
				) : (
					<button
						className='sidebar-toggle fa-solid fa-arrow-right'
						onClick={(e) => {
							e.preventDefault();
							showSidebar();
						}}
					></button>
				)}
			</span>
			
			<Link style={{  }} to={'/'} onClick={() =>
				setSidebarState((prev) => ({
					...prev,
					activePath: '/',
				}))
				}>
				<div
					className={`menu-logo ${
						sidebarState.expanded ? 'expanded' : 'collapsed'
					}`}
				>
					{sidebarState.expanded ? (
						<img
							src={require('../../Media/triptanker_logo.png')}
							alt='logo'
							className='logo'
						/>
					) : (
						<span className='fa-solid fa-gas-pump'></span>
					)}
				</div>
			</Link>
			<div className='clearfix' />
			<div
				className={`sidebar ${
					sidebarState.expanded ? 'expanded' : 'collapsed'
				}`}
			>
				<ul className='menu-list'>
					{SidebarMenuItems.map((comp, index) => (
						<Item
							key={index}
							isActive={sidebarState.activePath === comp.path}
							title={comp.title}
							icon={comp.icon}
							path={comp.path}
							updateActivePath={() =>
								setSidebarState((prev) => ({
									...prev,
									activePath: comp.path,
								}))
							}
							sidebarState={sidebarState}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
