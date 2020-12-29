import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Job from './Pages/Job';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => { 
  return (   
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />             
        </Route>  
        <Route exact path="/job/:id" render={(props) => <Job {...props} />} />
        </Switch>         
      </BrowserRouter>      
  );
}

export default App;