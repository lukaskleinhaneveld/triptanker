import React, { useContext } from 'react';
import './Styles/style.scss';
import Sidebar from './Components/Sidebar/sidebar';
import SidebarMenuItems from './Components/Sidebar/sidebarMenuItems';
import { Routes, Route } from 'react-router-dom';
import UserContext from './Contexts/userContext';
import ErrorComponent from './Components/Error/errorComponent';

const App = () => {
	const user = useContext(UserContext);
	return (
		<div className='wrapper-app'>
			<UserContext.Provider value={user}>
				<Sidebar user={user} />
				<div className='wrapper-content'>
					<Routes>
						{SidebarMenuItems.map((comp, index) => (
							<Route
								key={index}
								path={comp.path}
								element={comp.component}
							/>
						))}
						<Route path='*' element={<ErrorComponent />} />
					</Routes>
				</div>
			</UserContext.Provider>
		</div>
	);
};

export default App;
