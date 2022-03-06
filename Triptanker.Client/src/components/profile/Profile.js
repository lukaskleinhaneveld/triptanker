import React, { useContext } from 'react';
import UserContext from '../../Contexts/userContext';
import useData from '../../Tooling/useData';

const Profile = () => {
	const user = useContext(UserContext);
	const [forecast, query, setQuery, loading, error] = useData("https://localhost:7271/WeatherForecast");

	return <h1>Welcome {user.name}!</h1>;
};

export default Profile;
