import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import SingleCard from '../Cards/SingleCard';

const MyItems = () => {

    const [myCars, setCars] = useState([]);

    const [user] = useAuthState(auth);


    useEffect(() => {
        const getCars = async () => {

            const url = `http://localhost:5000/getCarByUser?email=${user?.email}`
            const { data } = await axios.get(url);
            setCars(data);
        }
        getCars();

    }, [user]);


    const HandleDeleteItem = id => {
        // console.log(id);

        const proceed = window.confirm('Are you sure to delete the item ?')

        if (proceed) {
            console.log("deleting ");


            axios.delete(`http://localhost:5000/delete/${id}`)
                .then(res => {
                    console.log(res);
                })

        }

    }


    return (
        <div className='flex flex-wrap gap-2 my-2 justify-center ' >



            {
                myCars.map(car => <SingleCard workFor={'myCars'} key={car._id} card={car} handler={HandleDeleteItem} ></SingleCard>)
            }

        </div>
    );
};

export default MyItems;