import axios from "axios";
const baseURL = "https://localhost:44308/api/";
// const baseURL = 'https://localhost:7024/api/';

export const getByLicenseplate = async (licensePlate) =>
	await axios
		.get(`${baseURL}RDW/CarDetail?licensePlate=${licensePlate}`)
		.then((response) => response);
