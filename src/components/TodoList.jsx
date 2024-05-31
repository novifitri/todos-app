import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleForm, deleteTodo }) {
    return (
        <>
            <ul className="todos">
                {todos.map((todo) => (
                    <TodoItem
                        toggleForm={toggleForm}
                        {...todo}
                        key={todo.id}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </>
    )
}
