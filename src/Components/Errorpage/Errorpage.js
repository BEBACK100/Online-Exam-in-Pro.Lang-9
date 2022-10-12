import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className=''>
            <div className='text-4xl mt-20 pt-40'>
                <h1>Sorry, This is Error </h1>
                <h1>Search Again</h1>
            </div>
            <p className="btn text-3xl mt-10"> Go to The <Link to='/'>  :{`Home`} </Link></p>

        </div>
    );
};

export default Errorpage;