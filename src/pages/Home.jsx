import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import todos from '../constant/data'

export default function Home() {
    const [data, setData] = useState(todos)
    const [showForm, setShowForm] = useState(false)
    const toggleForm = () => {
        setShowForm(!showForm)
    }
    const addTodo = (value) => setData([value, ...data])
    const handleTodoDone = (id) => {
        const newTodos = data.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done,
                }
            }
            return { ...todo }
        })
        setData(newTodos)
    }
    const deleteTodo = (id) => {
        const isDelete = confirm('Are you sure?')
        if (isDelete) {
            const newTodos = data.filter((todo) => todo.id !== id)
            setData(newTodos)
        }
    }
    return (
        <div className="container todo-wrapper">
            <div className="todo-header">
                <h1>Todos App</h1>
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
                handleTodoDone={handleTodoDone}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}
