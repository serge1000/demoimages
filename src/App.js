import React from 'react';
import CardsList from './CardsList';
import axios from 'axios';

const api =  axios.create({
    baseURL: 'http://localhost:3000/'
})

class App extends React.Component {
    state = {
        searchcards: [],
        foundcards: []
    }
    
    constructor() {
        super();

        api.get('/gettestimages').then(res => {
            this.setState( {searchcards: res.data } )
        })
    } 
  
    onCardClick = (imageID) => {
        api.get('/searchrequest/'+imageID).then(res => {
          this.setState( {foundcards: res.data} );
      })
    }

    onCardClickFake = (imageID) => {
    }

    render() {
    
         return (

           <div>
           { this.state.searchcards.length ===3 ?
           ( <div>
              <div className='tc mt5 mb4'>
                  <h1 >Click on image to find simular ones</h1> 
                  <CardsList searchcards={this.state.searchcards} CardClick={this.onCardClick} cardnumber={3} searchlist={true} />
              </div>
 
              <div>
                  <h1 className='tc mt5 mb4'>Search Results</h1>
                  <CardsList searchcards={this.state.foundcards} CardClick={this.onCardClickFake} cardnumber={this.state.foundcards.length} searchlist={false} />
              </div>
              
            </div>
           ) : (
            <div>
            </div>
           )
           }
           </div>

        );
    }


}

export default App;