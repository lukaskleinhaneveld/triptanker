import React from "react";
import * as RDW_service from '../../Services/RDW_service';
import useData from "../../Tooling/useData";
import Comparable from "./comparable";
import './comparableStyle.scss';

const ComparableWrapper = () => {
    // comparable.licensePlate.replace(/-/g, '').toUpperCase()
    const [ data: Any ]: Array = useData(RDW_service.getByLicenseplate('XS548S'));
    console.log('data: ', data);


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

    return(<>
        <div className={'comparable-wrapper'}>
            {data.map((comparable: any, i: Number) => {
                return (<Comparable key={i} comparable={comparable} />);
            })}
        </div>
    </>);
};

export default ComparableWrapper;