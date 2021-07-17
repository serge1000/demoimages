import React from 'react';

const Card =  ({ robotID, imagedata }) => {
  
      return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`data:image/png;base64,${imagedata}`} alt=""/>
            <h3>{robotID}</h3>
        </div>
      );
}

export default Card;