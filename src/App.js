import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import './App.scss';
import {compose} from "redux";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

class App extends Component {

    render() {

        return (
            <div className='app'>
                <div className='app__header'>
                    <Header/>
                </div>
                <div className="app__content">
                    <Content/>
                </div>
            </div>
        )
    }
};

let AppContainer = compose(
    connect(),
    withRouter
)(App);

const SKYTRACK = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SKYTRACK;


