import React from 'react';
// import { Link } from 'react-router-dom';

import img from './home img.jpg'

const Frontpage = () => {
    return (
        <div className='flex justify-around mx-auto '>
            <div className='mt-10 py-12'> <img src={img} alt="" /></div>
            <div className=' mt-10 py-8 '>

                <div className='text-4xl text-orange-700 pt-20 mt-25'>
                    <p>This is the Best Online <br /> <span className='text-3xl font-bold text-blue-500'>Programming Language</span> Learning platform <br /> if you want to learn more please <br /> <span className='text-black'>See and Click the below </span><br /></p>

                </div>
                {/* <div> <Link className='bg-yellow-400 rounded-xl p-2 mt-4 text-3xl' to='/card'>{`Question field`}</Link></div> */}

            </div>
        </div>
    );
};

export default Frontpage;