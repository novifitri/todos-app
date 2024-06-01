import React, { useContext } from 'react'
import ButtonDelete from './ButtonDelete'
import { TodoContext } from '../context/TodoContext'

export default function TodoItem({ id, name, done }) {
    const { handleTodoDone } = useContext(TodoContext)
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
            <ButtonDelete id={id} />
        </li>
    )
}
