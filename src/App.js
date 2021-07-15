import React from 'react';
//import SearchCards from './SearchCards';
//import FoundCards from './FoundCards'; 
import Card from './Card';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            imagedata: ''
        }
        //this.componentDidMount = this.componentDidMount.bind(this);
     } 
       
     UNSAFE_componentWillMount() {
        let request = require('request').defaults({ encoding: null });
        request.get('https://robohash.org/1у', (error, response, body) => {
            if (!error && response.statusCode === 200) {
                this.setState({ imagedata: Buffer.from(body).toString('base64')});
            }
        })
    }

    render() {
        const { imagedata } = this.state;
        return (
           <div>
              {/*
              <div className='tc mt5 mb4'>
                  <h1 >Click on image to find simular ones</h1>
                  <SearchCards />
              </div>
              <div>
                  <h1 className='tc mt5 mb4'>Search Results</h1>
                  <FoundCards /> 
              </div>
                */}
              <Card  id='1' imagedata={imagedata}/>
            </div>
        );
          }


}

export default App;