import React from 'react';
import './App.css';
import RoutesWithRouter from './components/Routes';
import LinksWithRouter from './components/Links';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import First from './pages/first';
import Second from './pages/second';
import Third from './pages/third';

function App() {
  //Esto habria que ver de modificarlo para que no sea necesario pasar un array de objetos
  const itemsObj = [
    { title: "First", search: "first", component: First },
    { title: "Second", search: "second", component: Second },
    { title: "Third", search: "third", component: Third }
  ];

  return (
    <Router>
      <div className="App">
        <LinksWithRouter itemsObj={itemsObj} />
        <RoutesWithRouter itemsObj={itemsObj}/>
      </div>
    </Router>
  );
}

export default App;
