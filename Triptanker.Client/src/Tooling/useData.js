import { useState, useEffect } from "react";
import axios from "axios";

// const [API_data, setApiData] = useState([
//     { key: '4xyvrc0n9i7lb35fy4fmeisre'},
//     { secret: '22s3kquqgdk80mguzs2d5us838dqim7gxni9s75e3kkqqgs8v6'},
//     { token: 'wROHRAFVQeW6zTZjZEWh3SSJf'},
//     { token_secret: 'k2HHa8xxFLWziAQ89oVtsftDDe2uo4nVMEXB'},
//     { redirect_URI: '83.82.50.19/'},
// ]);

// 1: Authorize application
// GET: https://soda.demo.socrata.com/oauth/authorize?client_id=API_data.key&response_type=code &redirect_uri=API_data.redirect_URI

// 2: User gets redirected to callback URL configured in ==> https://opendata.rdw.nl/profile/edit/developer_settings <==
// API_data.redirect_URI?code=CODE
// The CODE is an authorization code that can be used later
//
// const authCodeURL = httpClient.get(https://soda.demo.socrata.com/oauth/authorize?client_id=API_data.key&response_type=code &redirect_uri=API_data.redirect_URI);
// setApiData(prev => ({ ...prev, { auth_code: authCodeURL.split('?code=')[1] }}));

// 3: Retrieve access_token
// POST: https://soda.demo.socrata.com/oauth/access_token
// ?client_id=API_data.key
// &client_secret=API_data.secret
// &grant_type=authorization_code
// &redirect_uri=API_data.redirect_URI
// &code=API_data.auth_code
//
// Response: { access_token: ACCESS_TOKEN }

const useData = (promise, options = {}) => {
	const { triggers = [] } = options;
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [cancelToken, setCancelToken] = useState(undefined);
	const [trigger, setTrigger] = useState();

	useEffect(() => {
		if (cancelToken) {
			cancelToken.cancel("REQUEST_CANCELED");
		}

		const fetchData = async () => {
			setError(null);
			setLoading(true);
			setData([]);

			const token = axios.CancelToken.source();
			setCancelToken(token);

			try {
				Promise.resolve(promise).then((value) => {
					setData(value);
				});
				setData(data);
			} catch (err) {
				if (err.message === "REQUEST_CANCELED") return;
				setError(err.message);
			} finally {
				setCancelToken(undefined);
				setLoading(false);
			}
		};

		fetchData();
	}, triggers);

	if (!promise) return;

	return [data, (options = { loading, error, trigger })];
};

useData.prototypes = {
	promise: Promise,
};

export default useData;
