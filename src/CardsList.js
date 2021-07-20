import React from 'react';
import Card from './Card';

const CardsList = ({searchcards, CardClick, cardnumber, searchlist}) => { 

    const cardsArray = [];
    for (let i = 0; i < cardnumber; i++) {
        const imagedata = searchcards[i].imagedata;
        const imageID = searchcards[i].imageID;  
        cardsArray.push(<Card key={i} imageID={imageID} imagedata={imagedata} CardClick={CardClick} searchlist={searchlist} />);
    }

    return (
        <div className='tc ma3'>
            {cardsArray}
        </div>
    );
}

export default CardsList;