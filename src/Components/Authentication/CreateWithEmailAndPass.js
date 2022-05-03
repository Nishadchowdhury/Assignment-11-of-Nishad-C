import React from 'react';

const CreateWithEmailAndPass = () => {
    return (

        <div className=' h-screen flex justify-center items-center '>

            <div className="block p-6 rounded-lg shadow-lg bg-white border-[1px] border-blue-700">

                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">


                    <form>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-6">
                                <input type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="First name" />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Last name" />
                            </div>
                        </div>



                        <div class="form-group mb-6">
                            <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                                placeholder="Email address" />
                        </div>


                        <div class="form-group mb-6">
                            <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                                placeholder="Password" />
                        </div>


                        <div class="form-group form-check text-center mb-6">
                            <input type="checkbox"
                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="exampleCheck25" checked />
                            <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
                        </div>


                        <input type="submit" value="Sign Up" />
                    </form>


                </div>

            </div></div>
    );
};

export default CreateWithEmailAndPass;