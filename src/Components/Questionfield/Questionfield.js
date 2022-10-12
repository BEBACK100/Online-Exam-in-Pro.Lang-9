// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/solid'



const Questionfield = ({ mcq }) => {
    // console.log(mcq)
    const result = mcq.correctAnswer;

    const handleclick = () => {

        if (handleclick === result) {
            alert('correct')
        }
        else {
            alert('wrong')
        }
        // console.log(result);
    }

    const { question, options, correctAnswer } = mcq
    return (

        <div className=''>

            <div className="card   bg-blue-200 mt-10 ">

                <div className="card-body items-center text-center">


                    <h2 className="card-title text-blue-700 py-4"> Question:{question}</h2>
                    <div className='flex'>

                        <div>
                            <ol>

                                {options.map(option => (

                                    <li className='text-2xl text-black bg-slate-200 w-80 pb-4 mx-auto ' key={option}>
                                        <input onClick={() =>
                                            handleclick()

                                        } type="checkbox" class="  gap-3 checked:bg-black ..." />
                                        {option}</li>
                                ))}
                            </ol>
                        </div>

                        <div className='ml-10'>
                            <EyeIcon className="h-6 w-6 m-3 text-black" /><h1 className=' hidden'>correct Ans:{correctAnswer} </h1></div>
                    </div>


                    <div className="card-actions">
                        <button className="btn btn-primary"> <Link to='/'>{`Home`} </Link></button>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Questionfield;