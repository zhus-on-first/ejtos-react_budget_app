import React, { useContext } fom 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = userContext(AppContext);
    return (
        <div className = 'alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};

export default Budget;
