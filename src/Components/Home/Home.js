import React from 'react';
import CardContainer from '../Cards/CardContainer';

const Home = () => {
    return (
        <div>




            <div className="carousel slide relative" data-bs-ride="carousel">
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

            <CardContainer/>



        </div>
    );
};

export default Home;