import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCard from '../Cards/SingleCard';
import { toast } from 'react-toastify';

const InventoryUpdate = () => {
    const id = useParams().id;
    // console.log(useParams());
    const [car, setCar] = useState({});
    const { quantity } = car;

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])


    const handleSubmitUpdateQuantity = async (e) => {
        e.preventDefault();

        const inputValue = parseInt(e.target.inputQuantity.value);

        console.log(inputValue);

        const { quantity, ...rest } = car;
        const newQuantity = quantity + inputValue;

        const newCar = { quantity: newQuantity, ...rest };

        console.log(newCar);

        const url = (`http://localhost:5000/Update/${id}`);

        axios.put(url, newCar)
            .then(response => {

                console.log(response);

                if (response.status === 200) {
                    toast(`${inputValue} Add Successfully`, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(error => {
                console.log(error.message);
            });




        setCar(newCar);
        e.target.reset('inputQuantity')
    };




    const handleDeliver = async e => {

        if (car.quantity > 0) {
            const { quantity, ...rest } = car;
            const newQuantity = quantity - e;

            const newCar = { quantity: newQuantity, ...rest };

            console.log(newCar);

            const url = (`http://localhost:5000/Update/${id}`);

            const { data } = await axios.put(url, newCar);
            console.log(data);
            setCar(newCar);
        }
        else {
            window.alert('No Car Left')
        }

    };

    return (
        <div className='flex justify-evenly items-center lg:flex-row flex-col-reverse h-screen'>

            <div className='bg-red-200 lg:w-auto w-11/12 mx-3 p-3 rounded-lg'>

                <div className='' >

                    <div className="flex  mb-2 ">
                        <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                            in stock
                            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">{quantity}</span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmitUpdateQuantity} >

                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96">
                                <label htmlFor="exampleNumber0" className="form-label inline-block mb-2 text-gray-700">Import more </label>
                                <input
                                    required
                                    name='inputQuantity'
                                    type="number"
                                    className="
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

                        <div className="flex space-x-2 justify-center">
                            <div className="inline-flex relative w-fit">
                                <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded-full z-10">+</div>

                                <button type="submit"
                                    //  onClick={handleUpdate}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    data-mdb-ripple-duration="5s"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ADD More</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

            <div className='' ><SingleCard card={car} workhtmlFor={'update'} handler={handleDeliver}  ></SingleCard></div>


        </div>
    );
};

export default InventoryUpdate;