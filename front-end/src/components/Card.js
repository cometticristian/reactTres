import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    return (

        <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2" style={{borderLeftColor: props.color}}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{color: props.color}}> {props.title} </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
                        </div>
                        <div className="col-auto">
                            <i className={"fas " + props.icon + " fa-2x text-gray-300"}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.oneOf([
        "fa-clipboard-list",
        "fa-dollar-sign",
        "fa-user-check"
    ]).isRequired
}

Card.defaultProps = {
    title: "Ingrese el titulo",
    number: "Ingrese el numero",
    color: "blue",
    icon: "fa-window-close"
}

export default Card;