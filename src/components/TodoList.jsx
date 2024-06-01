import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos }) {
    return (
        <ul className="todos">
            {todos.map((todo) => (
                <TodoItem {...todo} key={todo.id} />
            ))}
        </ul>
    )
}
