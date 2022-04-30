import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ card }) => {
    const [showInfo , setShowInfo] = useState(1);

    const { name, picture, about, price, quantity, supplierName } = card;

    const Background = picture;

    console.log(Background);


    return (
        <div>
            <div className="flex justify-center items-center ">
                <div  onPointerEnter={()=>setShowInfo(true)} onPointerLeave={()=>setShowInfo(true)} className=" h-96 flex flex-col bg-no-repeat md:flex-row md:max-w-xl rounded-lg shadow-lg bg-slate-300" /*  style={{backgroundImage: "url(" + Background + ")"}} */  >
                   
                    <div  className={ !showInfo ? "invisible" : 'visible'  + "p-6 flex flex-col justify-start relative "}>
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>


                        <Link to="/login" className=" flex justify-center items-center h-10 absolute bottom-0 w-[200px] mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</Link>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default SingleCard;