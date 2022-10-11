import React from 'react';

const Questioninformation = ({ card }) => {
    const { logo, name, id } = card;
    return (
        <div className='  w-40 mx-auto bg-slate-400 gap-10'>
            <div>
                <figure>  <img src={logo ? logo : logo} alt="" /></figure>
                <h2 className="card-title">Name:{name}</h2>
                <button className="btn btn-primary">Question</button>

                <p>Id:{id}</p>


            </div>



        </div>
    );
};

export default Questioninformation;