import React, { useContext } from 'react';
import UserContext from '../../Contexts/UserContext';

const Profile = () => {
	const user = useContext(UserContext);
	return <h1>Welcome {user.name}!</h1>;
};

export default Profile;
