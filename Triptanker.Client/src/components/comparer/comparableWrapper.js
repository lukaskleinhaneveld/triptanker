import React, { useEffect, useState } from 'react';
import * as RDW_service from '../../Services/RDW_service';
import useData from '../../Tooling/useData';
import Comparable from './comparable';
import './comparableStyle.scss';

const ComparableWrapper = () => {
	// comparable.licensePlate.replace(/-/g, '').toUpperCase()
	const [data] = useData(RDW_service.getByLicenseplate('XS548S'));
	console.log('data: ', data);
	const [plates, setPlates] = useState(['']);
	const [carData, setCarData] = useState();

	// const getData = () => {
	// 	plates.map((plate) => {
	// 		setCarData([...carData, plate]);
	// 	});
	// };

	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	console.log('plates: ', plates);
	// 	fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setPosts(data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
	// }, [plates]);

	// const comparables = [
	//     {
	//         licensePlate: 'XS-548-S',
	//         bodyType: 'Hatchback',
	//         make: 'Mazda',
	//         model: '3',
	//         variant: 'MPS/Mazdaspeed',
	//         year: '2007',
	//     },
	//     {
	//         licensePlate: '48-GP-RV',
	//         bodyType: 'Sedan',
	//         make: 'BMW',
	//         model: '318i',
	//         variant: 'Business',
	//         year: '2007',
	//     },
	// ];

	return (
		<>
			<div className={'comparable-wrapper'}>
				{plates.map((comparable, i) => {
					return (
						<Comparable
							key={i}
							comparable={comparable}
							plates={plates}
							setPlates={setPlates}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ComparableWrapper;
