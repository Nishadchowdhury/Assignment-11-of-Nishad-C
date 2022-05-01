import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCard from '../Cards/SingleCard'

const InventoryUpdate = () => {
    const id = useParams().id;

    const [car, setCar] = useState({});

    const { quantity } = car;

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    console.log(car);


    const handleSubmit = e => {
        e.preventDefault();

        // console.log(10000);
    }

    const handleDeliver = e => {
        console.log(e);

        // console.log(10000);
    }

    return (
        <div className='flex justify-evenly items-center h-screen'>

            <div className='bg-red-200 p-3 rounded-lg'>

                <div  >

                    <div class="flex mb-2 ">
                        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                            in stock
                            <span class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">{quantity}</span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} >

                        <div class="flex justify-center">
                            <div class="mb-3 xl:w-96">
                                <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700">Import more </label>
                                <input
                                    type="number"
                                    class="
                                  form-control
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                 "
                                    defaultValue={1}
                                    min={1}
                                    id="exampleNumber0"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div class="flex space-x-2 justify-center">
                            <div class="inline-flex relative w-fit">
                                <div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded-full z-10">+</div>

                                <button type="submit"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ADD More</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

            <div className='' ><SingleCard card={car} workFor={'update'} handler={handleDeliver}  ></SingleCard></div>


        </div>
    );
};

export default InventoryUpdate;