import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({
    todos,
    toggleForm,
    handleTodoDone,
    deleteTodo,
}) {
    return (
        <>
            <ul className="todos">
                {todos.map((todo) => (
                    <TodoItem
                        {...todo}
                        toggleForm={toggleForm}
                        key={todo.id}
                        handleTodoDone={handleTodoDone}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </>
    )
}
