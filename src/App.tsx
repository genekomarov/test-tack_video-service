import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Films from "./components/content/Films/Films";
import Footer from "./components/Footer/Footer";
import Channels from "./components/content/Channels/Channels";
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {getUserName} from "./redux/profile-reducer";


function App(props: any) {

    useEffect( () => {
        props.getUserName();
    }, []);

    return (
      <div className="App">
        <Header />
        <Nav />

        <Route path={'/movies'} render={ () => <Films />}/>
        <Route path={'/channels'} render={ () => <Channels />}/>
        <Route path={'*'} render={ () => <Redirect to={'/movies'}/>}/>

        <Footer />
      </div>
  );
}

export default connect(null, {
    getUserName
})(App) ;
