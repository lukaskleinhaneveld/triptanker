import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Contexts/userContext';
import useData from '../../Tooling/useData';

const Profile = () => {
	const user = useContext(UserContext);
	const [ forecasts, loading, error ] = useData("https://localhost:44308/WeatherForecast");
	const [ isLoading, setIsLoading ] = useState(loading);
	const [ hasError, setHasError ] = useState(loading);

	useEffect(() => {
		setIsLoading(loading);
		setHasError(error);
	}, [loading, error]);

	return (<>
		<h1>Welcome {user.name}!</h1>
		<ul>
			{isLoading && <h4>Loading...</h4>}
			{!isLoading && hasError && <h4>{error}</h4>}
			{forecasts.map((forecast, i) => (
				<li key={i}>
					Temperature summary: {forecast.summary} <br />
					Temp in Celcius: ({forecast.temperatureC}) <br/>
					Date: {forecast.date.toString('dd-MM-YYYY')}<br />
					<br />
				</li>
			))}
		</ul>
	</>);
};

export default Profile;
