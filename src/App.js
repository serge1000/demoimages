import React from 'react';
import SearchCards from './SearchCards';
//import FoundCards from './FoundCards'; 
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

        api.get('/getsearchimages').then(res => {
            this.setState( {searchcards: res.data } )
        })
    } 
  

    onCardClick = (robotID) => {
        console.log('onCardClick robotID='+ robotID);
        api.get('/getfoundimages').then(res => {
          this.setState( {foundcards: res.data} );
      })
    }
    onCardClickFake = (robotID) => {
    }
    render() {
        console.log(' APPthis.state.searchcards');
        console.log(this.state.searchcards);       
         return (

           <div>
           { this.state.searchcards.length ===3 ?
           ( <div>
              <div className='tc mt5 mb4'>
                  <h1 >Click on image to find simular ones</h1> 
                  <SearchCards searchcards={this.state.searchcards} CardClick={this.onCardClick} cardnumber={3} searchlist={true} />
              </div>
 
              <div>
                  <h1 className='tc mt5 mb4'>Search Results</h1>
                  <SearchCards searchcards={this.state.foundcards} CardClick={this.onCardClickFake} cardnumber={this.state.foundcards.length} searchlist={false} />
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