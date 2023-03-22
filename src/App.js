import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Singlemovie from './components/Singlemovie';
import {BrowserRouter,Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/Home'>
        <Route index element={<Home/>}/>
        <Route path=':id' element={<Singlemovie/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
