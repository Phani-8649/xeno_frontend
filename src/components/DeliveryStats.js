import React from 'react';
import { Pie } from 'react-chartjs-2';

const DeliveryStats = ({ sent, failed }) => {
    const data = {
        labels: ['Sent', 'Failed'],
        datasets: [
            {
                data: [sent, failed],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };

    return (
        <div style={{ width: '400px', margin: 'auto' }}>
            <h3>Delivery Stats</h3>
            <Pie data={data} />
        </div>
    );
};

export default DeliveryStats;
