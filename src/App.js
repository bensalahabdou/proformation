import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

import Home from './home';
import Actualite from './actualite';
import Domaine from './domaine';
import Contact from './contact';
import Simple from './connexion';
import Signin from './signin';
import Article from './article';

const articles =[
  {title:"dev", date:"19/10/2019",smallDescription:"Développement", id:"1"},
  {title:"Méc", date:"19/09/2019",smallDescription:"Mécanique auto", id:"2"},
  {title:"Elect", date:"08/10/2019",smallDescription:"Batiment", id:"3"},
  {title:"clim", date:"19/07/2019",smallDescription:"climatisation", id:"4"}
]

function App() {
  return (
    <div className="App">
   
     <Route exact path="/" render={() => <Home/>} />
     <Route exact path="/home" render={() => <Home/>} /> 
     <Route exact path="/actualite" render={() => <Actualite articles={articles}/>} />
     <Route exact path="/actualite/:id" render={(props) => <Article {...props} articles={articles}/>} />
     <Route exact path="/domaine" render={() => <Domaine/>} />
     <Route exact path="/contact" render={() => <Contact />} />
     <Route exact path="/signup" render={() => <Simple />} />
     <Route exact path="/signin" render={() => <Signin/>} /> 
          
     
     
    </div>
  );
}

export default App;
