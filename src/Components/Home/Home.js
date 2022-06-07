import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '../Cards/CardContainer';
import OurApp from '../ExtraInfo/OurApp';
import OurBestSell from '../ExtraInfo/OurBestSell';
import caroucel1 from '../../Assets/Caroucel img/carosel-1.jpg'
import caroucel2 from '../../Assets/Caroucel img/carosel-2.jpg'
import caroucel3 from '../../Assets/Caroucel img/carosel-3.jpg'
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <div className=" carousel slide relative mb-3 shadow-xl hover:group-placeholder-shown:" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={caroucel2}
                            className="block w-full"
                            alt="Wild Landscape"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={caroucel1}
                            className="block w-full"
                            alt="Camera"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={caroucel3}
                            className="block w-full"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>

            </div>


            {/* card container */}

            <CardContainer />

            <div className='w-full flex justify-center   mb-3 shadow-slate-100 shadow-lg' >
                <Link to={'/inventory'}
                    className="inline-block w-48 mx-auto text-center px-6 py-3 mb-6 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"

                >
                    Manage Inventory
                </Link>
            </div>

            {/* our best selling car */}
            <OurBestSell />

            {/* our app */}
            {/* <OurBestSell/> */}
            <OurApp />


            <Footer />
        </div>
    );
};

export default Home;