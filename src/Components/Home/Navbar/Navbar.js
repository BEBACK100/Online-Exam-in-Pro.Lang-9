import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-blue-200 justify-between">
                <div>
                    <p className="btn btn-ghost normal-case text-3xl">Online-Exam-Platform in Programming Language</p>
                </div>
                <div className='text-3xl text-blue-800 space-x-3 '>
                    <Link to='Home'>Home</Link>
                    <Link to='Topics'>Topics</Link>
                    <Link to='Statistics'>Statistics</Link>
                    <Link to='Blog'>BLog</Link>
                </div>
            </div>

        </div>

    );
};

export default Navbar;