import React, { useState } from "react";
import { useDebounce } from "../../Tooling/useDebounce";
import * as RDW_service from "../../Services/RDW_service";
const Comparable = ({ currentPlateKey, plates, setPlates }) => {
	const [plateInput, setPlateInput] = useState("");
	const [carData, setCarData] = useState();
	const debouncedPlate = useDebounce(plateInput, 500);

	const onPlateChange = (event) => {
		setPlateInput(event.target.value.replace(/-/g, "").toUpperCase());
	};

	const fetchData = async (licensePlate) => {
		const { data, status, statusText } =
			await RDW_service.getByLicenseplate(licensePlate);

		if (status === 200) {
			setCarData(data[0]);
		} else {
			console.error(status, statusText);
		}
	};

	const submit = (event) => {
		event.preventDefault();
		if (debouncedPlate !== "" && plates.length) {
			// for (let p in plates) {
			// 	if (plates[p] === debouncedPlate) {
			// 		console.log("Test: ", plates[p]);
			// 	}
			// }
			fetchData(debouncedPlate);
			if (plates.length !== 1) {
				setPlates(() =>
					plates.map((plate) =>
						plate.key === currentPlateKey
							? { key: plate.key, plate: debouncedPlate }
							: plate,
					),
				);
			} else {
				setPlates([{ key: plates[0].key, plate: debouncedPlate }]);
			}
		}
	};

	return (
		<>
			<div className={"comparable-data"}>
				<form onSubmit={(e) => submit(e)}>
					<p>
						<input
							id={"plate"}
							type={"text"}
							placeholder={"Enter plate..."}
							value={plateInput}
							onChange={onPlateChange}
						/>
						<button
							className="getCarData"
							onClick={(e) => submit(e)}
							disabled={!!!plateInput}>
							<i className={"bi bi-check"}></i>
						</button>
					</p>
				</form>
				{!!carData && (
					<>
						<hr />
						{{ carData }}
						<span
							style={{
								display: !!carData ? "inline-block" : "none",
							}}>
							License plate : {carData.licensePlate}
							<br />
							Body type: {carData.design}
							<br />
							Brand: {carData.brand}
							<br />
							model: {carData.model}
							<br />
							Trade name: {carData.tradeName}
							<br />
							year: {carData.year}
							<br />
						</span>
					</>
				)}
			</div>
		</>
	);
};

export default Comparable;
