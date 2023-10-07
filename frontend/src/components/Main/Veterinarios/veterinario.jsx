import React from 'react';
import Read from './read'
import { Route} from 'react-router-dom';
import Create from './create';


const Veterinarios = () => {
    return(
        <div className='main'>
            <h2 className='main-header'>Veterinarios</h2>
            <div>
            <Route exact path='/create' component={Create}></Route>
            </div>
            <div style={{marginTop:50}}>
                <Route exact path='/veterinarios' component={Read}></Route>
            </div>
        </div>      
    )
}
export default Veterinarios;
