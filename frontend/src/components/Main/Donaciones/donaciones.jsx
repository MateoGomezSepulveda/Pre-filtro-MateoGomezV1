import React from 'react';
import Read from './read'
import { Route} from 'react-router-dom';


const Donaciones = () => {
    return(
        <div className='main'>
            <h2 className='main-header'>Donaciones</h2>
            <div style={{marginTop:50}}>
                <Route exact path='/donaciones' component={Read}></Route>
            </div>
        </div>      
    )
}
export default Donaciones;
