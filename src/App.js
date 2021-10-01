import React, { Component } from "react";
import './App.css';
import FrontPage from './components/FrontPage';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddInternHistory from './components/internHistory/AddInternHistory';
import { Provider } from "react-redux";
import store from './store';
import UpdateHistory from "./components/internHistory/UpdateHistory";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header/>
 <Route exact path="/frontPage" component ={ FrontPage }/>
 <Route exact path="/addInternHistory" component ={ AddInternHistory}/>
 <Route exact path="/updateInternHistory/:id" component ={ UpdateHistory}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
