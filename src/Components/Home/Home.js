import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Frontpage from '../Frontpage/Frontpage';

import Questioninformation from '../Questioninform/Questioninformation';


const Home = () => {
    const questionpatern = useLoaderData();
    const card = questionpatern.data;
    console.log(card)
    return (
        <div>

            <Frontpage></Frontpage>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
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