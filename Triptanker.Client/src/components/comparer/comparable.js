import React, { useEffect, useState } from 'react';

const Comparable = ({ comparable, i, plates, setPlates }) => {
	const [plate, setPlate] = useState('');
	const debouncedPlateChange = useDebounce(plate, 500);

	const addComparable = () => {
		setPlates([...plates, '']);
	};

	useEffect(() => {
		console.log('debouncedPlateChange: ', debouncedPlateChange);
	}, [debouncedPlateChange]);

	function useDebounce(value, delay) {
		// State and setters for debounced value
		const [debouncedValue, setDebouncedValue] = useState(value);
		useEffect(
			() => {
				// Update debounced value after delay
				const handler = setTimeout(() => {
					setDebouncedValue(value);
				}, delay);
				// Cancel the timeout if value changes (also on delay change or unmount)
				// This is how we prevent debounced value from updating if value is changed ...
				// .. within the delay period. Timeout gets cleared and restarted.
				return () => {
					clearTimeout(handler);
				};
			},
			[value, delay], // Only re-call effect if value or delay changes
		);
		return debouncedValue;
	}

	return (
		<>
			<div className={'comparable-data'}>
				<p>
					<input
						id={'plate'}
						type={'text'}
						placeholder={'Enter plate...'}
						value={comparable.licensePlate}
						onChange={(e) => setPlate(e.target.value)}
					/>
					<button className='addPlate' onClick={addComparable}>
						<i className={'bi bi-plus-circle'}></i>
					</button>
				</p>
				<hr />
				<span
					style={{ display: !!comparable ? 'inline-block' : 'none' }}>
					License plate : {comparable.licensePlate}
					<br />
					Body type: {comparable.design}
					<br />
					Brand: {comparable.brand}
					<br />
					model: {comparable.model}
					<br />
					Trade name: {comparable.tradeName}
					<br />
					year: {comparable.year}
					<br />
				</span>
			</div>
		</>
	);
};

export default Comparable;
