import React from 'react';
import SearchCards from './SearchCards';
import FoundCards from './FoundCards'; 

const App = () => {
    return (
        <div>
            <div>
                <h1 className='tc mt5 mb4'>Click on image to find simular ones</h1>
                <SearchCards />
            </div>
            <div>
                <h1 className='tc mt5 mb4'>Search Results</h1>
                <FoundCards /> 
            </div>
        </div>
    );
}

export default App;