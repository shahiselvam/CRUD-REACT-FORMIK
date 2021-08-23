import React from 'react';
import {BrowserRouter , Route , Switch ,Redirect} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Products from './Products';
import ViewProduct from './viewProducts';
import EditProduct from './EditProduct'
import './App.css'


function App() {
  return (
    <div>
      
  <BrowserRouter>

 
  <Switch>
   <Route path="/home" component={Home} />
   <Route path="/about" component={About} />
   <Route path="/Products" component={Products} />
   <Route path="/ViewProduct" component={ViewProduct} />
   <Route path="/EditProduct/:id" component={EditProduct} />

   <Route exact path="/">

     <Redirect to="/home" />
   </Route>
   </Switch>
  </BrowserRouter>
  </div>
);

  }


  
export default App;
