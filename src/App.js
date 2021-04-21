import React from 'react';
import './App.css';
import HomePage from './pages/home_page';
import AboutPage from './pages/about_page';
import ContactPage from './pages/contact_page';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'
import Navbar from './navbar';
function App(){
  return(
    <Router>
    <div className="App">
    <Navbar title="Youtube Demo"/>
    <Route path="/" exact component={HomePage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/contact" exact component={ContactPage}/>
    </div>
    </Router>
    )
}
export default App;
