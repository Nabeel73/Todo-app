import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Counters from './Components/counters';
import './App.css';

class App extends Component {
    render() {
        return ( 
            <React.Fragment>
            <Navbar></Navbar>
            <main className="container">
                <Counters/>
            </main>
            </React.Fragment>
        );
    }
}

export default App;