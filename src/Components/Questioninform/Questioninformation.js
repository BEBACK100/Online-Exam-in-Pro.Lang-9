import React from 'react';
import { Link } from 'react-router-dom';

const Questioninformation = ({ card }) => {
    // console.log(card)
    const { logo, name, id, total } = card;
    return (
        <div className='  w-50 mx-auto bg-slate-400 gap-10 mt-8 pt-5 rounded-xl'>
            <div>
                <h2 className="card-title text-4xl justify-center text-blue-800 my-4">Name:{name}</h2>
                <figure>  <img src={logo ? logo : logo} alt="" /></figure>


                <div className='flex justify-between'>
                    <div> <p className='text-3xl bg-slate-300 w-20 justify-center m-4  rounded-full p-3'>Id:{id}</p></div>
                    <div> <p className='text-3xl bg-white w-30 text-black font-semibold justify-center m-4  rounded-full p-3'>Total Question:{total}</p></div>

                </div>
                <Link to={`/Topics/${id}`} > <button className="btn btn-primary w-full text-3xl rounded-full  mt-3"><span className='text-yellow-300'>Click Here  </span> : Question</button></Link>


            </div>



        </div>
    );
};

export default Questioninformation;