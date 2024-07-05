import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import './App.css';

export class App extends Component {z
    render() {
        return (
            <>
                <NavBar />
                <News pageSize={6} />
            </>
        )
    }
}

export default App
