import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './routes/Home';
import RestaurantDetail from './routes/RestaurantDetail';
import Update from './routes/Update'

 const App=()=>{
    return(
        <div className='all-components'>
        <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
            <Route exact path="/restaurants/:id" component={Update}/>
            </Switch>
        </Router>
        </div>
    )
}

export default App;