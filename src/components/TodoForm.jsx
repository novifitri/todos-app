import React, { useState } from 'react'

export default function TodoForm({ toggleForm, addTodo, data }) {
    const [name, setName] = useState('')
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const todo = {
            id: data.length + 1,
            name,
        }
        addTodo(todo)
        setName('')
    }
    return (
        <div className={`form-wrapper`} id="todoForm">
            <h2>Add New Todo</h2>
            <form className="todo-form" onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                />
                <div className="todo-form_action">
                    <button type="button" className="btn" onClick={toggleForm}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
