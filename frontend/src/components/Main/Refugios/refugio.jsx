import React from 'react';
import Read from './read'
import { Route} from 'react-router-dom';


const Refugios = () => {
    return(
        <div className='main'>
            <h2 className='main-header'>Refugios</h2>
            <h2 className='main-header'></h2>
            <div style={{marginTop:50}}>
                <Route exact path='/' component={Read}></Route>
            </div>
        </div>      
    )
}
export default Refugios;
