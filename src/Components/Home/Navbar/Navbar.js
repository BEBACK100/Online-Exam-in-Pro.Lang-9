import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-3xl text-blue-800 space-x-3 '>
            <Link to='Home'>Home</Link>
            <Link to='Topics'>Topics</Link>
            <Link to='Statistics'>Statistics</Link>
            <Link to='Blog'>BLog</Link>
        </div>
    );
};

export default Navbar;