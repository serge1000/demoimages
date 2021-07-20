import React from 'react';

const Card =  ({ imageID, imagedata, CardClick, searchlist }) => {
      let css = 'tc bg-light-gray dib br3 pa3 ma2  bw2 shadow-5';
      if(searchlist) {css = css + ' grow';} 

      return (
        <div className={css} onClick={() =>{CardClick(imageID)}} >
            <img src={`data:image/png;base64,${imagedata}`}  alt=""/>
            <h3>{imageID}</h3>
        </div>
      );
}

export default Card; 