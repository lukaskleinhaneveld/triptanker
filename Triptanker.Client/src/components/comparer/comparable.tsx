import React from "react";

const Comparable = ({ comparable }) => (<>
        <div className={'comparable-data'}>
            License plate   : {comparable.licensePlate}<br/>
            Body type: {comparable.design}<br/>
            Brand: {comparable.brand}<br/>
            model: {comparable.model}<br/>
            Trade name: {comparable.tradeName}<br/>
            year: {comparable.year}<br/>
        </div>
    </>);

export default Comparable;
