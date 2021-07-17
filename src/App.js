import React from 'react';
import SearchCards from './SearchCards';
//import FoundCards from './FoundCards'; 
import axios from 'axios';

const api =  axios.create({
    baseURL: 'http://localhost:3000/'
})
class App extends React.Component {
    state = {
        searchcards: []
    }
    
    constructor() {
        super();

        api.get('/getsearchimages').then(res => {
            this.setState( {searchcards: res.data } )
        })
    } 
  
    render() {
       
         return (
             
           <div>
           { this.state.searchcards.length ===3 ?
           ( <div>
              <div className='tc mt5 mb4'>
                  <h1 >Click on image to find simular ones</h1>
                  <SearchCards searchcards={this.state.searchcards}/>
              </div>
            {/*   
              <div>
                  <h1 className='tc mt5 mb4'>Search Results</h1>
                  <FoundCards /> 
              </div>
           */}                
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