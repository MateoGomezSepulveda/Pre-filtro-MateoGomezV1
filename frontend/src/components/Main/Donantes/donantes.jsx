import React from 'react';
import Read from './read'
import { Route} from 'react-router-dom';


const Donantes = () => {
    return(
        <div className='main'>
            <h2 className='main-header'>Donantes</h2>
            <div style={{marginTop:50}}>
                <Route exact path='/donantes' component={Read}></Route>
            </div>
        </div>      
    )
}
export default Donantes;
