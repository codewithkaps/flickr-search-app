import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import './App.css';
import { useReducer } from 'react';
import { reducer } from './reducer';
import Header from './header/Header';
import { ImagesContext } from './ImagesContext';

function App() {

	const defaultState = {
		showLoader: false,
		showError: false,
		data: [],
		page: 1
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <ImagesContext.Provider value={{state, dispatch}}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </ImagesContext.Provider>
  );
}

export default App;
