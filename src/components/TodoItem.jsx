import React from 'react'
import ButtonDelete from './ButtonDelete'

export default function TodoItem({
    id,
    name,
    done,
    handleTodoDone,
    deleteTodo,
}) {
    return (
        <li className={`todo-item ${done && 'done'}`}>
            <div className="todo-item__info">
                <input
                    type="checkbox"
                    className="check-todo"
                    checked={done}
                    onChange={() => handleTodoDone(id)}
                />
                <h4>{name}</h4>
            </div>
            <ButtonDelete id={id} deleteTodo={deleteTodo} />
        </li>
    )
}
