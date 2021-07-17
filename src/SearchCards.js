import React from 'react';
import Card from './Card';

const SearchCards = (state) => { 

    const cardsArray = [];
    for (let i = 0; i < 3; i++) {
        const imagedata = state.searchcards[i].imagedata;
        const robotID = state.searchcards[i].robotID;  
        cardsArray.push(<Card key={robotID} robotID={robotID} imagedata={imagedata} />);
    }

    return (
        <div className='tc ma3'>
            {cardsArray}
        </div>
    );
}


export default SearchCards;