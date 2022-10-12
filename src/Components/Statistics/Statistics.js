import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statiostics = () => {

    const data = useLoaderData();
    const statistics = data.data;

    console.log(statistics);
    const { name, id, total } = statistics;
    return (
        <div className='pt-20'>
            <h1>This is statistics page</h1>


            <LineChart width={600} height={300} statistics={statistics} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey={id} stroke="#8884d8" />
                <CartesianGrid stroke={total} strokeDasharray="5 5" />
                <XAxis dataKey={name} />
                <YAxis />
                <Tooltip />
            </LineChart>
            ;
        </div>
    );
};

export default Statiostics;