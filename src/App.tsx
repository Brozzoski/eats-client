import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const APP_KEY = "4bb056d1015d46e1b58682b91e081712";

  const request ="GET https://api.spoonacular.com/recipes/complexSearch";

  return (
    <div className="App">
     <form className = "search-form">
       <input className = 'search-bar' type = 'text'/>
       <button className = 'search-button' type = "submit">Search</button>
     </form>

      
    </div>
  );
}

export default App;
