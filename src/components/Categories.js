import React from 'react';
import Category from './Category';

function Categories() {

    let cat = ['01', '02', '03', '04', '05', '06', '07', '08'];

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {cat.map((num, i) => <Category key={num + i} number={'Category ' + num} />)}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Categories