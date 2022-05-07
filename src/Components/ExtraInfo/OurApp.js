import React from 'react';

const OurApp = () => {
    return (
        <div className="pt-8 pb-12 md:py-3 lg:py-3 overflow-x-hidden border-2 rounded-xl lg:m-14 m-9 p-2 shadow-xl bg-slate-200 " id="key-features">
            <div className="container px-4 mx-auto">

                <h1 className='text-center leading-tight text-4xl mt-0 mb-2 text-blue-600 font-sans font-semibold' >Download Our app </h1>

                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full flex items-center justify-center lg:w-1/2">
                        <div className="lg:py-6 lg:pr-77 wow animate__ animate__fadeIn  animated" data-wow-delay=".3s"
                        //style="visibility: visible; animation-delay: 0.3s;"
                        >
                            <h1 className='mb-3' >Download our app for batter experience</h1>
                            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800">
                                we build a truly useable app for our all category customers . they can easily see our all collections and they can order , know about our products . it's so easy and friendly user interface .
                            </p>

                            <div className='flex justify-center items-center gap-7' >


                                <button  >  <img src="https://html.dynamiclayers.net/at/enovo/img/android.png" alt="" /></button>
                                <button >  <img src="https://html.dynamiclayers.net/at/enovo/img/apple.png" alt="" /> </button>


                            </div>

                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                        <div className="wow animate__ animate__fadeIn  animated" data-wow-delay=".5s"
                        //style="visibility: visible; animation-delay: 0.5s;"
                        >

                            <img className="jump relative mx-auto rounded-xl w-1/3 z-10" src="https://i.ibb.co/mvCPyhy/our-app.png" alt="Monst" />
                            {/* <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="https://i.ibb.co/r0Qv1tk/notUser.png" alt="Monst" /> */}
                            {/* <img className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="https://i.ibb.co/r0Qv1tk/notUser.png" alt="Monst" /> */}
                        </div>
                    </div>

                </div>
                <div className="flex space-x-2 lg:justify-start lg:ml-10 justify-center">
                    <a href="https://www.hotcars.com/toyota-c-hr-best-features/" target="_blank" rel="noopener noreferrer"> <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore More</button> </a>
                </div>
            </div>
        </div>
    );
};

export default OurApp;