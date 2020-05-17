import React, {useEffect, Suspense} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {getUserName} from "./redux/profile-reducer";

const Films = React.lazy ( () => import("./components/content/Films/Films") );
const Channels = React.lazy ( () => import("./components/content/Channels/Channels") );

function App(props: any) {

    useEffect( () => {
        props.getUserName();
    }, []);

    return (
      <div className="App">
        <Header />
        <Nav />

        <Route path={'/movies'} render={ () => {
            return <Suspense fallback={<div>Загрузка...</div>}><Films /></Suspense>
        }}/>
        <Route path={'/channels'} render={ () => {
            return <Suspense fallback={<div>Загрузка...</div>}><Channels /></Suspense>
        }}/>
        <Route path={'*'} render={ () => <Redirect to={'/movies'}/>}/>

        <Footer />
      </div>
  );
}

export default connect(null, {
    getUserName
})(App) ;
