import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Header = () => {

    const [user, loading] = useAuthState(auth);



    return (
        <nav
            className="relative w-full flex flex-wrap items-center lg:justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
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
                    <Link to='/' className="text-xl text-white pr-2 font-semibold" href="#"><img className='h-10 rounded-2xl' src="/favicon.ico" alt="" /></Link>


                    {/* <!-- Left links --> */}
                    <div>

                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">



                            {user && <li className="nav-item p-2">
                                <Link to="/inventory" className="nav-link text-white" href="#">Manage Inventory</Link>
                            </li>}

                            {user && <li className="nav-item p-2">
                                <Link to='/AddItem' className="nav-link text-white" href="#">Add Item</Link>
                            </li>}

                            {user && <li className="nav-item p-2">
                                <Link to="/myItems" className="nav-link text-white" href="#">My items</Link>
                            </li>}

                            
                            {loading ? <Spinner></Spinner> : !user ? <li className="nav-item p-2">
                                <Link to='login' className="nav-link text-white" href="#">Login</Link>
                            </li>
                                :
                                <li className="nav-item p-2">
                                    <button onClick={() => signOut(auth)} >Log Out</button>
                                </li>
                            }


                            {/* <li className="nav-item p-2">
                                <div className="nav-link text-white" href="#">abc</div>
                            </li> */}

                        </ul>

                    </div>


                    {/* <!-- Left links --> */}
                </div>

                <div className="flex items-center relative">
                    {/* <!-- Icon --> */}

                    <div className="dropdown relative">
                        <div
                            className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
                            href="#"
                            id="dropdownMenuButton1"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="bell"
                                className="w-4"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                                ></path>
                            </svg>
                            <span
                                className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"
                            >99+</span
                            >
                        </div>

                    </div>
                    <div className="dropdown relative ml-2 ">
                        <div
                            className="dropdown-toggle flex items-center hidden-arrow"
                            href="#"
                            id="dropdownMenuButton2"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                className='h-6 rounded-full'
                                src={ (user &&  user.photoURL) ?  user.photoURL : "https://i.ibb.co/r0Qv1tk/notUser.png"  }
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
