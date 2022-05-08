import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {

    const [allData, setAllData] = useState([]);

    const w = window.innerWidth < 480;
    console.log(window.focus());

    console.log(w);

    //getting add data
    useEffect(() => {
        axios.get('https://hidden-shore-66811.herokuapp.com/allCars')
            .then(resp => {

                setAllData(resp.data);
            });
    }, []);

    //deleting a data
    const HandleDeleteItems = id => {
        // console.log(id);

        const proceed = window.confirm('Are you sure to delete the item ?')

        if (proceed) {
            console.log("deleting ");


            axios.delete(`https://hidden-shore-66811.herokuapp.com/delete/${id}`)
                .then(res => {
                    console.log(res);
                    const restData = allData.filter(data => data._id !== id)
                    setAllData(restData)
                })

        }

    }

    let n = 0;

    return (
        <div className='mb-7' >

            <div className='flex justify-between px-8 pt-8' >
                <Link
                    to='/'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 border-2 
                    border-blue-600 bg-blue-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out hover:text-white"
                >
                    <p className='flex items-center gap-2' ><span>Home</span> <img className='w-7 inline-block' src="https://i.ibb.co/k1m5pJK/Pngegg.png" alt="" /> </p>
                </Link>

                <Link
                    to='/AddItem'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 border-2 border-green-600 bg-green-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out hover:text-white"
                >
                    <p className='flex items-center gap-2' ><span>Add Car</span> <img className='w-7 inline-block' src="https://i.ibb.co/hVmYKL2/plus-or-add.png" alt="" /> </p>
                </Link>
            </div>

            <div className="flex flex-col">
                <div className="lg:mx-2">
                    <div className="py-2 inline-block min-w-full sm:px-6">
                        <div className="overflow-hidden">
                            <table className="min-w-full"  >
                                <thead className="bg-white border-[1px] ">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-gray-900 lg:px-6 px-2 py-4 ">
                                            Picture
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6 px-2 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900  text-left">
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6 px-2 py-4 text-left">
                                            About
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6 px-2 py-4 text-left">
                                            Provider
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        allData.map(car =>
                                            <tr key={car._id} className="bg-gray-100 border-b">
                                                <td className=" border-r-2 lg:px-6 px-2 py-4 w-4 whitespace-nowrap text-sm font-medium text-gray-900">{++n}</td>

                                                <td className=" border-r-2   lg:px-6 px-2 py-4 lg:w-52  "> <img className='rounded-tl-xl rounded-br-xl' src={car.picture} alt="" /> </td>

                                                <td className="border-r-2  lg:px-2 lg:w-7 lg:text-sm text-xs text-gray-900 font-light ">
                                                    $ {car.price}
                                                </td>
                                                <td className={`border-r-2 w-2 text-sm text-center font-light ${car.quantity === 0 ? "text-red-600 font-extrabold" : 'text-gray-900'} `}>
                                                    {car.quantity}
                                                </td>
                                                <td className="border-r-2 text-sm lg:block hidden text-gray-900 font-light lg:px-6 px-2 py-4 ">
                                                    {car.about}
                                                </td>

                                                <td className="border-r-2 text-sm lg:hidden text-gray-900 font-light lg:px-6 px-1 py-4 ">
                                                    {car.about.slice(0, 100)} <br /> ... <br /> <br /> <Link to={`./${car._id}`} type="button" className=" inline-block px-3 py-2 bg-blue-600 text-white font-sm text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">more</Link>
                                                </td>

                                                <td className="border-r-2  text-sm text-gray-900 font-light lg:px-6 px-2 py-4 whitespace-nowrap">
                                                    {car.supplierName}
                                                </td>
                                                <td className="border-r-2 flex flex-col items-center text-sm text-gray-900 font-light lg:px-3 w-20 whitespace-nowrap">
                                                    <div className='mt-5' >
                                                        <button onClick={() => HandleDeleteItems(car._id)} > <img className='w-20' src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png" alt="" /> </button>

                                                    </div>

                                                    <div>

                                                        <Link to={`./${car._id}`} type="button" className=" inline-block px-3 py-2 bg-blue-600 text-white font-sm text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</Link>
                                                    </div>

                                                </td>
                                            </tr>

                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Inventory;