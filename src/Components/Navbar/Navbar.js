import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed w-full'>


            <div className="navbar bg-blue-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>  <Link to='Topics'>Topics</Link></li>
                            <li>    <Link to='Statistics'>Statistics</Link></li>
                            <li>  <Link to='Blog'>BLog</Link></li>




                        </ul>
                    </div>
                    <p className="btn btn-ghost normal-case text-3xl">Online-Exam-Platform in Programming Language</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ml-4 text-blue-700 font-bold text-3xl space-x-3 p-0">
                        <Link to='Topics'>Topics</Link>
                        <Link to='Statistics'>Statistics</Link>
                        <Link to='Blog'>BLog</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className="btn text-2xl">  <Link to='/'>{`Home`} </Link></p>
                </div>
            </div>


        </div>

    );
};

export default Navbar;