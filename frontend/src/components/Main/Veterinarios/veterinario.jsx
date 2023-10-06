import React from 'react';
import Read from './read'
import { Route} from 'react-router-dom';


const Veterinarios = () => {
    return(
        <div className='main'>
            <h2 className='main-header'>Veterinarios</h2>
            <div style={{marginTop:50}}>
                <Route exact path='/veterinarios' component={Read}></Route>
            </div>
        </div>      
    )
}
export default Veterinarios;
