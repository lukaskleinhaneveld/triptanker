import React, { useEffect, useState } from "react";
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
			for (let p in plates) {
				if (plates[p].plate === debouncedPlate) {
					alert(`Je zoekt al op ${debouncedPlate}!`);
					return;
				}
			}
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

	useEffect(() => {
		console.log("carData: ", carData);
	}, [carData]);
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
						<div
							style={{
								display: !!carData ? "inline-block" : "none",
								overflowY: "auto",
								maxHeight: "700px",
							}}>
							<ul>
								{Object.entries(carData).map((data) => {
									return (
										<li>
											{data[0]}: {data[1]}
										</li>
									);
								})}
							</ul>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Comparable;
