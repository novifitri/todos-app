import React from 'react'

export default function TodoItem({ id, name, deleteTodo }) {
    return (
        <li className="todo-item">
            <div className="todo-item__info">
                <input type="checkbox" className="check-todo" />
                <h4>{name}</h4>
            </div>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}
