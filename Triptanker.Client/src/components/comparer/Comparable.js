import React from "react";
import * as RDW_service from '../../Services/RDW_service';

const Comparable = ({ comparable }) => {
    const resp = RDW_service.getByLicenseplate(comparable.licensePlate.replace(/-/g, '').toUpperCase());
    console.log('resp: ', resp);

    return (<>
        <div className={'comparable-data'}>
            licenseplate: {comparable.licensePlate}<br/>
            Body type: {comparable.bodyType}<br/>
            make: {comparable.make}<br/>
            model: {comparable.model}<br/>
            variant: {comparable.variant}<br/>
            year: {comparable.year}<br/>
        </div>
    </>);
};

export default Comparable;
