import React from 'react';

const CreateWithEmailAndPass = () => {
    return (

        <div className=' h-screen flex justify-center items-center '>

            <div className="block p-6 rounded-lg shadow-lg bg-white border-[1px] border-blue-700">
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input required type="text" className="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="First name" />
                        </div>
                        <div className="form-group mb-6">
                            <input requiredtype="text" className="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                aria-describedby="emailHelp124" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <input requiredtype="email" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                            placeholder="Email address" />
                    </div>
                    <div className="form-group mb-6">
                        <input requiredtype="password" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                            placeholder="Password" />
                    </div>
                    <div className="form-group form-check text-center mb-6">
                        <input required type="checkbox"
                            className="form-check-input  requiredappearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck25" />
                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
                    </div>
                    <input type="submit"

                    value={"submit"}
                        className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"/>
                </form>
            </div></div>
    );
};

export default CreateWithEmailAndPass;