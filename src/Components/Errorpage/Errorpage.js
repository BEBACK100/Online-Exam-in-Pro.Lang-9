import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='bg-red-500 w-90 mx-auto text-center py-8 rounded-full '>
            <div className='text-4xl text-white font-semibold mt-20 pt-35 '>
                <h1>Sorry, This is Wrong page </h1>
                <h1> Please,Search Again</h1>
                <h1>Got to The Home</h1>
                <h1>Click Down</h1>
            </div>
            <p className="btn text-3xl mt-10"> <Link to='/'>  {`Home`} </Link></p>

        </div>
    );
};

export default Errorpage;