import { createContext, useState } from 'react'
import todos from '../constant/data'

export const TodoContext = createContext()

export default function TodoProvider({ children }) {
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
    const state = {
        data,
        showForm,
        setShowForm,
        toggleForm,
        setData,
        addTodo,
        handleTodoDone,
        deleteTodo,
    }
    return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>
}
