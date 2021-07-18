import React from 'react';

const Card =  ({ robotID, imagedata, CardClick, searchlist }) => {
      let css = 'tc bg-light-gray dib br3 pa3 ma2  bw2 shadow-5';
      if(searchlist) {css = css + ' grow';} 

      return (
        <div className={css} onClick={() =>{CardClick(robotID)}} >
            <img src={`data:image/png;base64,${imagedata}`}  alt=""/>
            <h3>{robotID}</h3>
        </div>
      );
}

export default Card; 