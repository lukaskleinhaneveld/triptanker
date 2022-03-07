import React from "react";
import Comparable from "./comparable";
import './comparableStyle.scss';

const ComparableWrapper = () => {
    const comparables = [
        {
            licensePlate: 'XS-548-S',
            bodyType: 'Hatchback',
            make: 'Mazda',
            model: '3',
            variant: 'MPS/Mazdaspeed',
            year: '2007',
        },
        {
            licensePlate: '48-GP-RV',
            bodyType: 'Sedan',
            make: 'BMW',
            model: '318i',
            variant: 'Business',
            year: '2007',
        },
    ];

    return(<>
        <div className={'comparable-wrapper'}>
            {comparables.map((comparable, i) => {
                return (<Comparable key={i} comparable={comparable} />);
            })}
        </div>
    </>);
};

export default ComparableWrapper;