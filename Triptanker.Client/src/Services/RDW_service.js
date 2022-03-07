import httpClient from 'react-http-client';
const baseURL = 'https://opendata.rdw.nl/';

export const getByLicenseplate = async(licensePlate) => await httpClient.get(`${baseURL}resource/m9d7-ebf2.json?kenteken=${licensePlate}`);
