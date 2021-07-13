import React from 'react';
import Card from './Card';

const SearchCards = () => {
    const cardsArray = [];
    for (let i = 0; i < 3; i++) {
        cardsArray.push(<Card key={i} id={i} />);
    }
    return (
        <div className='tc ma3'>
            {cardsArray}
        </div>
    );
}

export default SearchCards;