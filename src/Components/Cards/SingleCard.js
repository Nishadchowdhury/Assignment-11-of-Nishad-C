import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ card, workFor, handler }) => {
    const [showInfo, setShowInfo] = useState(1);

    const [aboutMod, setAboutMod] = useState('');

    const { name, picture, about, price, quantity, supplierName, _id } = card;

    useEffect(() => {

        if (about?.length > 100 && workFor === 'home') {
            setAboutMod(about.slice(0, 100) + '...')
        } else {
            setAboutMod(about)
        }

    }, [about])

    const Background = picture;

    console.log(Background);


    return (
        <div className="flex justify-center " >
            <div className= {`rounded-lg shadow-lg bg-white max-w-sm border-2 p-1 relative ${workFor === 'home' && "h-[500px] " } `} >

                {quantity === 0 && <div className='absolute left-1 w-24 text-center rounded-tl-lg bg-red-600 py-1 px-1 text-lg text-white ' >Sold</div>

                }

                <img className="rounded-t-lg" src={picture} alt="" />

                <div className="p-1">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {aboutMod}
                    </p>
                    <div className=''>
                        <h1> <span className='text-blue-500 uppercase ' >  per unit cost: </span>  ${price}</h1>
                        <h1> <span className='text-blue-500 uppercase ' >  Total: </span>  {quantity} unites left.</h1>
                        <h1> <span className='text-blue-500 uppercase ' >  Provider: </span>  {supplierName}</h1>
                       { workFor ==='update' && <h1> <span className='text-blue-500 uppercase text-red-500' >  Product Id: </span>  {_id}</h1>}

                    </div>

                    <div className={`flex justify-center bottom-2 w-[91%] ${workFor === 'home' && "absolute"} `} >
                        {workFor === 'home' ?
                            <Link
                                to={`inventory/${_id}`}
                                className="inline-block  text-center px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Update
                            </Link> : <button
                                onClick={() => handler(1)}
                                to={`inventory/${_id}`}
                                className="inline-block  text-center px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium  leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                data-mdb-ripple-duration="5s"
                            >
                                Deliver a unit
                            </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;