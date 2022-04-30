import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const CardContainer = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })


    }, [])

    return (
        <div>

            <div>
            {
                cards.slice(0,1).map(card => <SingleCard key={card._id} card={card} />)
            }
            </div>

        </div>
    );
};

export default CardContainer;