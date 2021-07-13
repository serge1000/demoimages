import React from 'react';
import Card from './Card';

const FoundCards = () => {
    const cardsArray = [];
    for (let i = 0; i < 5; i++) {
        cardsArray.push(<Card key={i} id={i} />);
    }
    return (
        <div className='tc ma3'>
            {cardsArray}                    
        </div>
    );
}

export default FoundCards;