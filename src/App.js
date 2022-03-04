import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavPanel, ComponentLinks } from './components/navpanel/NavPanel';
import UserContext from './contexts/userConext';
import './styles/style.scss';

const App = () => {
	const [user, setUser] = useState({
		name: 'Lukas',
	});
	return (
		<Router>
			<UserContext.Provider value={user}>
				<div className='wrapper-app'>
					<div className='wrapper-sidebar'>
						<NavPanel user={user} />
					</div>
					<div className='wrapper-content'>
						<Routes>
							{ComponentLinks.map((comp, i) => (
								<Route
									key={i}
									path={comp.path}
									element={comp.component}
								/>
							))}
						</Routes>
					</div>
				</div>
			</UserContext.Provider>
		</Router>
	);
};

export default App;
