import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarMenuItems from './SidebarMenuItems';

export const Item = ({
	path,
	title,
	icon,
	sidebarState,
	isActive,
	updateActiveIndex,
}) => (
	<li
		className={`menu-item ${isActive ? 'active' : ''}`}
		onClick={() => updateActiveIndex()}
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
		activeIndex: 0,
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
			<div
				className={`menu-logo ${
					sidebarState.expanded ? 'expanded' : 'collapsed'
				}`}
			>
				{sidebarState.expanded ? (
					<img
						src={require('../../media/triptanker_logo.png')}
						alt='logo'
						className='logo'
					/>
				) : (
					<span className='fa-solid fa-gas-pump'></span>
				)}
			</div>
			<div className='clearfix' />
			<div
				className={`sidebar ${
					sidebarState.expanded ? 'expanded' : 'collapsed'
				}`}
			>
				<ul className='menu-list'>
					{SidebarMenuItems.map((comp, compIndex) => (
						<Item
							key={compIndex}
							isActive={sidebarState.activeIndex === compIndex}
							title={comp.title}
							icon={comp.icon}
							path={comp.path}
							updateActiveIndex={() =>
								setSidebarState((prev) => ({
									...prev,
									activeIndex: compIndex,
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
