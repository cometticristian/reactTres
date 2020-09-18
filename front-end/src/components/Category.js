import React from 'react';
import { checkPropTypes } from 'prop-types';

function Category (props) {
    return (

<div className="col-lg-6 mb-4">
<div className="card bg-info text-white shadow">
    <div className="card-body">
        {props.number}
            </div>
</div>
</div>

);
}

export default Category