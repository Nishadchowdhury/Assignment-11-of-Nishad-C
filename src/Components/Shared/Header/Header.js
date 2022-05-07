import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useParams } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Header = () => {

    const [user, loading] = useAuthState(auth);
    const [totalMyItems , setTotalMyItems ] = useState(0);

    // console.log(totalMyItems);


    const params = useLocation().pathname;


    console.log(params);

    useEffect(() => {
        const getCars = async () => {

            const url = `http://localhost:5000/productCountByUser?email=${user?.email}`
            const { data } = await axios.get(url);
            setTotalMyItems(data);
        }
        getCars();

    }, [user]);



    return (
        <nav
            className={`relative w-full flex flex-wrap items-center lg:justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light ${(params === "/inventory" || params === "/blogs") ? 'hidden' : 'none'} `}
        >
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button
                    className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        className="w-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center justify-between mr-6" id="navbarSupportedContent1">
                    <Link to='/' className="text-xl text-white pr-2 font-semibold"><img className='h-10 rounded-2xl' src="/favicon.ico" alt="" /></Link>


                    {/* <!-- Left links --> */}
                    <div>

                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">



                            {user && <li className="nav-item p-2">
                                <Link to="/inventory" className="nav-link text-white">Manage Inventory</Link>
                            </li>}

                            {user && <li className="nav-item p-2">
                                <Link to='/AddItem' className="nav-link text-white">Add Item</Link>
                            </li>}

                            {user && <li className="nav-item p-2">
                                <Link to="/myItems" className="nav-link text-white">My items</Link>
                            </li>}


                            {loading ? <Spinner></Spinner> : !user ? <li className="nav-item p-2">
                                <Link to='login' className="nav-link text-white">Login</Link>
                            </li>
                                :
                                <li className="nav-item p-2">
                                    <button onClick={() => signOut(auth)} >Log Out</button>
                                </li>
                            }


                            <li className="nav-item p-2">
                                <Link to="/blogs" className="nav-link text-white">Blogs</Link>
                            </li>


                        </ul>

                    </div>


                    {/* <!-- Left links --> */}
                </div>

                <div className="flex items-center relative">
                    {/* <!-- Icon --> */}

                    <div className="dropdown relative">
                        <div
                            className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
                           
                            id="dropdownMenuButton1"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                           <img src="https://i.ibb.co/VMVWj9r/Image-3.png" className='w-10' alt="car img" />
                            <span
                                className="text-white bg-red-700 absolute rounded-full text-xs -mt-5 ml-6 py-0 px-1.5">

                                    {totalMyItems <= 99 && totalMyItems} {totalMyItems > 99 && "99+"}

                                    </span>
                        </div>

                    </div>
                    <div className="dropdown relative ml-2 ">
                        <div
                            className="dropdown-toggle flex items-center hidden-arrow"
                          
                            id="dropdownMenuButton2"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                className='h-6 rounded-full'
                                src={(user && user.photoURL) ? user.photoURL : "https://i.ibb.co/r0Qv1tk/notUser.png"}
                                alt=""
                                loading="lazy"
                            />
                        </div>

                    </div>
                </div>
                {/* <!-- Right elements --> */}


            </div>
        </nav>
    );
};

export default Header;
