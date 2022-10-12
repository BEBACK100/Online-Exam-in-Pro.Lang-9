// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';



const Questionfield = ({ mcq }) => {
    // console.log(mcq)
    const result = mcq.correctAnswer;
    // console.log(result);
    const [toggle, setToggle] = useState(true);
    const [ans, setAns] = useState(true);
    const handleclick = () => {
        console.log(result)
        if (correctAnswer === ans) {
            alert('Right')
        }
        else {
            alert('worng')
        }
        setAns(result);
    }

    const { question, options, correctAnswer } = mcq
    return (


        <div className=''>
            {

            }

            <div className="card   bg-blue-200 mt-10 ">

                <div className="card-body items-center text-center">

                    <div>
                        {toggle || <h1>correct Ans:{correctAnswer} </h1>}
                        <button
                            onClick={() => setToggle(!toggle)}> <EyeIcon

                                className="h-8 w-8 " />
                        </button>
                    </div>
                    <div> <h2 className="card-title text-blue-700 py-4"> Question:{question}</h2></div>

                    <div className='flex'>

                        <div>
                            <ol>

                                {options.map(option => (

                                    <li className='text-2xl text-black bg-slate-200 w-80 pb-4 mx-auto ' key={option}>
                                        <input onClick={() => handleclick(ans)} type="checkbox" class="w-12 h-8 checked:bg-black ..." />
                                        {option}</li>
                                ))}
                            </ol>
                        </div>




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