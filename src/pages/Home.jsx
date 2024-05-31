import React, { useEffect, useState } from 'react'
import todos from '../constant/data'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
export default function Home() {
    const [data, setData] = useState(todos)
    const [showForm, setShowForm] = useState(false)
    const toggleForm = () => {
        setShowForm(!showForm)
    }
    const addTodo = (value) => setData([value, ...data])
    const deleteTodo = (id) => {
        const newTodos = data.filter((todo) => todo.id !== id)
        setData(newTodos)
    }
    return (
        <div className="container todo-wrapper">
            <div className="todo-header">
                <h1 className>Todos App</h1>
                <button className="btn btn-primary" onClick={toggleForm}>
                    Add Todo
                </button>
            </div>

            {showForm && (
                <TodoForm
                    toggleForm={toggleForm}
                    addTodo={addTodo}
                    data={data}
                />
            )}
            <TodoList
                todos={data}
                toggleForm={toggleForm}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}
