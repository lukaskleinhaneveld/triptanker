import httpClient from 'react-http-client';
const baseURL = 'https://localhost:44308/api/';
// const baseURL = 'https://localhost:7024/api/';

export const getByLicenseplate = async (licensePlate) =>
	await httpClient.get(
		`${baseURL}RDW/CarDetail?licensePlate=${licensePlate}`
	);
