import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar } from 'recharts';

const Statiostics = () => {

    const data = useLoaderData();
    const statistics = data.data;

    // console.log(statistics);
    const { name, id, total } = statistics;
    return (
        <div className='pt-20 mx-auto bg-slate-300'>
            <h1 className='text-4xl font-bold'>This is statistics page</h1>



            <BarChart width={730} height={250} statistics={statistics}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey={name} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar className='bg-blue-500 text-green-400 ' dataKey={total} />
                <Bar dataKey={id} fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Statiostics;