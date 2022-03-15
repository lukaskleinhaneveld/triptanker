import React, { useContext } from 'react';
import UserContext from '../../Contexts/userContext';

const Profile = () => {
	const user = useContext(UserContext);
	

	return (<>
		Welcome {user.name}!
	</>);
};

export default Profile;
