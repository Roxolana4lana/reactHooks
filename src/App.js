import React, { Component } from 'react'
import './styles/App.scss'
import TodoList from './components/TodoList';
import Greeting from './components/Greeting';
import TestGreeting from './components/testGreeting';


export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>My react app</h1>
               <TestGreeting/>
                <h2>React hooks</h2>
                <TodoList/>
            </div>
        )
    }
}