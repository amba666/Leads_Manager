import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import  { Provider } from "react-redux";
import store from "../store";
import Alerts from "./layout/Alerts";

import  { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//  alert options
const alertOptions = {
    timeout: 3000,
    position: 'top-center'
}


class App extends  Component {
    render(){
       return (
           <Provider store ={store}>
               <AlertProvider template={AlertTemplate} {...alertOptions}>
           <Fragment>
                 <Header />
                <Alerts />
               <div className="container">
                 <Dashboard />

               </div>
           </Fragment>
               </AlertProvider>
            </Provider>

       )
   }
    
}
ReactDom.render(<App/>, document.getElementById('app'));