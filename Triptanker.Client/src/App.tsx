import React, { useContext } from 'react';
import './Styles/mainStyles.scss';
import Sidebar from './Components/Sidebar/sidebar';
import Headerbar from './Components/Headerbar/headerbar';
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
				<div className={'main-page'}>
					<Headerbar />
					<div className='wrapper-content'>
						<Routes>
							{SidebarMenuItems.map((comp: any, index: Key) => (
								<Route
									key={index}
									path={comp.path}
									element={comp.component}
								/>
							))}
							<Route path='*' element={<ErrorComponent />} />
						</Routes>
					</div>
				</div>
			</UserContext.Provider>
		</div>
	);
};

export default App;
