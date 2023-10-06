import React from 'react';
import Read from './read'
import { Route} from 'react-router-dom';


const Adoptantes = () => {
    return(
        <div className='main'>
            <h2 className='main-header'>Adoptante</h2>
            <div style={{marginTop:50}}>
                <Route exact path='/adoptantes' component={Read}></Route>
            </div>
        </div>      
    )
}
export default Adoptantes;
