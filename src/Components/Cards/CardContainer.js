import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const CardContainer = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch('https://hidden-shore-66811.herokuapp.com/allCarsHomePage')
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })


    }, [])

    return (
        <div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-4' >
                {
                    cards.map(card => <SingleCard key={card._id} workFor={'home'} card={card} />)
                }
            </div>

        </div>
    );
};

export default CardContainer;