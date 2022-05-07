import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import SignWithSocial from './SignWithSocial';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner/Spinner';

const EmailLogin = () => {

    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";



    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);




    const [
        signInWithEmailAndPassword,
        userOfSignIn,

        loadingOfSignIn,

        errorOfSignIn,
    ] = useSignInWithEmailAndPassword(auth);

    const [user] = useAuthState(auth);

    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmitLogin = event => {
        event.preventDefault();

        const password = event.target.password.value;
        const email = event.target.email.value;


        signInWithEmailAndPassword(email, password);

    }

    const handleForgetPassword = async e => {
        console.log('re set password ');

        if (email) {

            await sendPasswordResetEmail(email)
            
            toast('Sent reset email to' + email);
            setError('');
        } else {
            alert('please provide a valid email')
        }
    }


    useEffect(() => {
        if (errorReset || errorOfSignIn) {
            return setError(errorReset?.message || errorOfSignIn?.message);
        }

    }, [errorReset, errorOfSignIn])



    return (

        <div>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt=''
                                className="w-full" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20 bg ">
                            <div className={`relative ${loadingOfSignIn && 'flex  justify-center items-center'}`} > <div className={` absolute ${!loadingOfSignIn && 'hidden'}`} ><Spinner /></div >
                                <div className='' >

                                    <form onSubmit={handleSubmitLogin}

                                        className={`${loadingOfSignIn && 'hidden'}  `}

                                    >
                                        {/* <!--  Email input -->  */}
                                        <div className="mb-6" >
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                onBlur={(e) => setEmail(e.target.value)}
                                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Email address"
                                            />
                                        </div>

                                        {/* <!--  Password input -->  */}
                                        <div className="mb-6">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Password"
                                            />
                                        </div>

                                        <div className="flex justify-between items-center mb-6">
                                            <button
                                                onClick={handleForgetPassword}
                                                type='button'
                                                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</button>
                                        </div>



                                        {/* <!--  Submit button -->  */}

                                    { error && <p className='text-red-500 mb-2 text-center' > {error} </p>}
                                        <input
                                            type="submit"
                                            value={'Sign In'}
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        />

                                        <div className='mt-6' >
                                            Don't Have an account..? <Link to='/createAccount' className='text-blue-600' > Create new account </Link>
                                        </div>


                                        <div
                                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                        >
                                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                        </div>

                                        <SignWithSocial />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmailLogin;