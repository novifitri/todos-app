import React, { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { TodoContext } from '../context/TodoContext'

export default function Home() {
    const state = useContext(TodoContext)
    const { data, setData, showForm, toggleForm } = state

    return (
        <div className="container todo-wrapper">
            <div className="todo-header">
                <h1>Todos App</h1>
                <button className="btn btn-primary" onClick={toggleForm}>
                    Add Todo
                </button>
            </div>

            {showForm && <TodoForm />}
            <TodoList todos={data} />
        </div>
    )
}
