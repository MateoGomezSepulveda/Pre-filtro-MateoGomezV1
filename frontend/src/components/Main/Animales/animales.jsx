import React from 'react';
import Read from './read'
import { Route} from 'react-router-dom';


const Animales = () => {
    return(
        <div className='main'>
            <h2 className='main-header'>Animales</h2>
            <div style={{marginTop:50}}>
                <Route exact path='/animales' component={Read}></Route>
            </div>
        </div>      
    )
}
export default Animales;
