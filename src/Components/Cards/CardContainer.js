import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import SingleCard from './SingleCard';

const CardContainer = () => {

    const [cards, setCards] = useState([]);


    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!cards.length) {
            setLoading(true)
            fetch('https://hidden-shore-66811.herokuapp.com/allCarsHomePage')
                .then(res => res.json())
                .then(data => {
                    setCards(data)
                    setLoading(false)
                })
        }


    }, [cards.length])


    return (
        <div>

            {loading ? <Spinner></Spinner> : <div className='grid  lg:grid-cols-3 grid-cols-1 gap-4 p-4' >
                {
                    cards.map((card, i) => <SingleCard key={card._id} i={i} workFor={'home'} card={card} />)
                }
            </div>}

        </div>
    );
};

export default CardContainer;