import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword , useUpdateProfile  } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';

const CreateWithEmailAndPass = () => {

    const [check, setCheck] = useState(false)
    const [checkStyle, setCheckStyle] = useState(false);
    const [Error, setError] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if(error ){
            if(error?.message.includes('Firebase: Error (auth/internal-error)')){
                setError('there is having some problem please try agin')
            }
            else(setError(error?.message ))
        }
    },[error])



    // console.log(error);

    const handleCreateAccount = e => {
        e.preventDefault();
        if (!check) {
            const ok = () => {
                setCheckStyle(true)
                setTimeout(() => { setCheckStyle(!true) }, 1000)
            }
            return ok()

        }

        // const name = e.target.name.value;
        // const lastName = e.target.lastName.value;
        // const fullName = name + ' ' + lastName || '';

        const email = e.target.email.value;
        const password = e.target.password.value;
        const Cpassword = e.target.Cpassword.value;


        // console.log(/[a-z][0-9]/.test(password.stringFy()))


        if (!(password === Cpassword)) {
            return setError('password dose not match');

        }
        
        if (!/^(?=.*[0-9]).*$/.test(password)) {
            return setError('password must contain a Number');

        }
        if (password.length < 6 ) {
            return setError('password is too short');

        }

        if (password &&  email) {
            createUserWithEmailAndPassword(email,password);
        }
        
        e.target.reset();
        setError('');
        
        if(!error){
            toast(`User Created`)
        }
    }


    return (

        <div className=' h-screen flex justify-center items-baseline '>

            <div className="block p-6 rounded-lg shadow-2xl  bg-white border-[1px] border-blue-700  mt-4">

                <div className="block p-6 rounded-lg shadow-lg border-[0.5px] bg-white max-w-md">





                    <div className='relative flex  justify-center items-center' > <div   className={` absolute ${ !loading && 'hidden'}`} ><Spinner /></div>
                        <form onSubmit={handleCreateAccount} className={`${loading  && 'opacity-0'} transition ease-in-out ` } >

                          


                            <div className="form-group mb-6">
                                <input
                                    required
                                    name='email'
                                    type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-800 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                                    placeholder="Email address" />
                            </div>


                            <div className=" grid grid-cols-2 gap-4 mb-6">

                                <input
                                    required
                                    name='password'
                                    type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-800 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                                    placeholder="Password" />


                                <input
                                    required
                                    name='Cpassword'
                                    type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-800 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password" />

                            </div>

                            {Error && <p className='text-center mb-3 font-serif text-red-600  transition ease-in-out' >{Error}..!</p>}


                            <div className={`form-group form-check text-center mb-6  transition ease-in-out ${checkStyle && 'scale-125 '}  `}>
                                <input
                                    type="checkbox"
                                    onClick={() => setCheck(!check)}
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                    name='checkbox' />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck25">Agree to <span className='text-blue-600' >Terms</span>...?</label>
                            </div>


                            <div className='flex justify-center' >
                                <button type="submit"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${!check && 'opacity-25'} `}

                                    value="Sign Up" > Create New Account </button>
                            </div>
                        </form></div>


                </div>

            </div></div>
    );
};

export default CreateWithEmailAndPass;