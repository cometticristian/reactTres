import React from 'react';
import Card from '../components/Card';

function RowPrices() {

    let data = [
        {
            title: "Products in Data Base",
            number: 135,
            color: '#4e73df',
            icon: 'fa-clipboard-list'
        },
        {
            title: "Amount in products",
            number: 546.456,
            color: '#1cc88a',
            icon: 'fa-dollar-sign'
        },
        {
            title: "Users quantity",
            number: 38,
            color: '#f6c23e',
            icon: 'fa-user-check'
        }
    ]

    return (

        <div className="row">

           {data.map((d, i)=> <Card key={d.title + i} title={d.title} number={d.number} color={d.color} icon={d.icon} /> )} 

        </div>
    );
}

export default RowPrices;