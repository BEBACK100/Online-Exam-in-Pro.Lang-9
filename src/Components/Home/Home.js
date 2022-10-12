import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Frontpage from '../Frontpage/Frontpage';

import Questioninformation from '../Questioninform/Questioninformation';



const Home = () => {
    const questionpatern = useLoaderData();
    const card = questionpatern.data;
    console.log(card)
    return (
        <div className='bg-blue-200'>

            <div className=''>
                <Frontpage></Frontpage>
            </div>
            <div className='grid  lg:grid-cols-2'>
                {
                    card.map(card => <Questioninformation
                        key={card.id}
                        card={card}></Questioninformation>)
                }

            </div>
        </div>
    );
};

export default Home;