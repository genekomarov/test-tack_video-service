import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Films from "./components/content/Films/Films";
import Footer from "./components/Footer/Footer";
import Channels from "./components/content/Channels/Channels";
import {Route} from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Header />
        <Nav />

        <Route path={'/movies'} render={ () => <Films />}/>
        <Route path={'/channels'} render={ () => <Channels />}/>

        <Footer />
      </div>
  );
}

export default App;
