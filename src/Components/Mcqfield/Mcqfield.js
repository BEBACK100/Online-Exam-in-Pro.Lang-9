import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questionfield from '../Questionfield/Questionfield';

const Mcqfield = () => {
    const questionid = useLoaderData();
    const questions = questionid.data.questions;
    // console.log(questions)

    return (
        <div className='pt-20 bg-blue-200'>
            <h1 className='text-4xl font-semibold'>Give The Currect Answer of the Cards </h1>
            <div className='grid lg:grid-cols-2 z-20  gap-5 '>
                {
                    questions.map(mcq => <Questionfield
                        key={questions.id}
                        mcq={mcq}></Questionfield>)
                }
            </div>
        </div>
    );
};

export default Mcqfield;