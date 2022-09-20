import React, { useState } from "react";
import Comparable from "./comparable";
import "./comparableStyle.scss";

const ComparableWrapper = () => {
	const [plates, setPlates] = useState([{ key: 0, plate: "" }]);

	const addComparable = () => {
		let canAddPlate = true;

		plates.forEach((plate) => {
			if (plate.plate === "") {
				canAddPlate = false;
			}
		});
		if (canAddPlate) {
			setPlates([...plates, { key: plates.length, plate: "" }]);
		} else {
			alert("Je hebt een plaat nog niet ingevuld!");
		}
	};

	return (
		<>
			<div className={"comparable-wrapper"}>
				{plates.map((plate) => {
					return (
						<Comparable
							key={plate.key}
							currentPlateKey={plate.key}
							plates={plates}
							setPlates={setPlates}
						/>
					);
				})}
				<div
					className="comparable-data-placeholder"
					onClick={addComparable}>
					<span>
						<i
							className={"bi bi-plus-circle"}
							style={{ fontSize: "30px" }}></i>
					</span>
				</div>
			</div>
		</>
	);
};

export default ComparableWrapper;
