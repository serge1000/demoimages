import React from 'react';
import Card from './Card';

const SearchCards = ({searchcards, CardClick, cardnumber, searchlist}) => { 
console.log('state');
console.log(searchcards);
    const cardsArray = [];
    for (let i = 0; i < cardnumber; i++) {
        const imagedata = searchcards[i].imagedata;
        const robotID = searchcards[i].robotID;  
        cardsArray.push(<Card key={robotID} robotID={robotID} imagedata={imagedata} CardClick={CardClick} searchlist={searchlist} />);
    }

    return (
        <div className='tc ma3'>
            {cardsArray}
        </div>
    );
}


export default SearchCards;