import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import './App.css';
import { useReducer } from 'react';
import { reducer } from './reducer';
import Header from './header/Header';

function App() {

	const defaultState = {
		showLoader: false,
		showError: false,
		data: [],
		page: 1
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <Header state={state} dispatch={dispatch}></Header>
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
