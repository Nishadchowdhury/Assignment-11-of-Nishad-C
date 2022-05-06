import React from 'react';

const OurBestSell = () => {
    return (
        <div class="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden border-2 rounded-xl m-9 p-2 shadow-xl " id="key-features">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap lg:flex-nowrap">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:py-6 lg:pr-77 wow animate__ animate__fadeIn  animated" data-wow-delay=".3s"
                        //style="visibility: visible; animation-delay: 0.3s;"
                        >
                            <div class="mb-4">
                                <span class="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__ animate__fadeInDown" data-wow-delay=".9s"
                                // style="visibility: visible; animation-delay: 0.9s;"
                                >Our Best Selling Car</span>
                                <h2 class="text-4xl mt-5 font-bold font-heading wow animate__ animate__fadeIn" data-wow-delay=".3s"  // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;"
                                >Extra Features !</h2>
                            </div>
                            <div class="flex items-start py-4 wow animate__ animate__fadeIn" data-wow-delay=".5s"
                            // style="visibility: visible; animation-delay: 0.5s;"
                            >
                                <div class="w-8 mr-5 text-blue-500">
                                    <img src="https://i.ibb.co/7C1npZ8/image-1.png" alt="not load" />
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold font-heading">Cool Styling</h3>
                                    <p class="text-blueGray-400 leading-loose">For a car of its shape, size and weight, the CH-R offers some fairly competitive ratings as far as fuel efficiency goes. </p>
                                </div>
                            </div>
                            <div class="flex items-start py-4 wow animate__ animate__fadeIn" data-wow-delay=".7s"
                            // style="visibility: visible; animation-delay: 0.7s;"
                            >
                                <div class="w-8 mr-5 text-blue-500">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold font-heading">Efficiency</h3>
                                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                </div>
                            </div>
                            <div class="flex items-start py-4 wow animate__ animate__fadeIn" data-wow-delay=".9s"
                            //  style="visibility: visible; animation-delay: 0.9s; animation-name: fadeIn;"
                            >
                                <div class="w-8 mr-5 text-blue-500">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold font-heading">Tech &#38; more </h3>
                                    <p class="text-blueGray-400 leading-loose">Typical of a Japanese manufacturer, the Toyota includes a who host of tech and infotainment to entertain and assist.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative w-full lg:w-1/2 my-12 lg:my-0">
                        <div class="wow animate__ animate__fadeIn  animated" data-wow-delay=".5s"
                        //style="visibility: visible; animation-delay: 0.5s;"
                        >

                            <img class="jump relative mx-auto rounded-xl w-[500px] z-10" src="https://i.ibb.co/WWJsDnq/our-best-selling-car.png" alt="Monst" />
                            {/* <img class="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="https://i.ibb.co/r0Qv1tk/notUser.png" alt="Monst" /> */}
                            {/* <img class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="https://i.ibb.co/r0Qv1tk/notUser.png" alt="Monst" /> */}
                        </div>
                    </div>

                </div>
                <div class="flex space-x-2 lg:justify-start lg:ml-10 justify-center">
                   <a href="https://www.hotcars.com/toyota-c-hr-best-features/" target="_blank" rel="noopener noreferrer"> <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore More</button> </a>
                </div>
            </div>
        </div>

    );
};

export default OurBestSell;