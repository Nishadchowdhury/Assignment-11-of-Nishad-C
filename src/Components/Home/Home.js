import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '../Cards/CardContainer';
import OurApp from '../ExtraInfo/OurApp';
import OurBestSell from '../ExtraInfo/OurBestSell';

const Home = () => {
    return (
        <div>




            <div className="carousel slide relative mb-3 shadow-xl" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="https://i.ibb.co/MDFGgc2/carosel-1.jpg"
                            className="block w-full"
                            alt="Wild Landscape"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/wdym1gp/carosel-2.jpg"
                            className="block w-full"
                            alt="Camera"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/LvCFXkr/carosel-3.jpg"
                            className="block w-full"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>
                {/* <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button> */}
                {/* <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button> */}
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
            <OurBestSell/>

            {/* our app */}
            {/* <OurBestSell/> */}
            <OurApp/>



        </div>
    );
};

export default Home;