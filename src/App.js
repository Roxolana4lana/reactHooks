import React, { Component } from 'react'
import './styles/App.scss'
import TodoList from './components/TodoList';


export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>My react app</h1>
                <h2>React hooks</h2>
                <TodoList/>
            </div>
        )
    }
}