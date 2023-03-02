import React from 'react'
import { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function Main() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [nbCompleted, setnbCompleted] = useState(0)

    const handleChange = e => {
        setTodo (e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(todo !== '') {
            setTodos([...todos, todo])
            setTodo('')
        }

    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index)

        setTodos(newTodos)
    }

    const completeTodo = e => {
        e.target.classList.toggle("fa-solid")
        e.target.classList.toggle("fa-check")
        const currentTodo = e.target.parentElement.lastChild
        currentTodo.classList.toggle("completed")
        currentTodo.classList.contains("completed") ? setnbCompleted(nbCompleted + 1) : setnbCompleted(nbCompleted - 1)
    }

    const handleFilter = e => {
        const filter = e.target.innerText
        e.target.classList.add("active")
        const neighbors = e.target.parentElement.children
        for(let i = 0; i < neighbors.length; i++) {
            if(neighbors[i] !== e.target) {
                neighbors[i].classList.remove("active")
            }
        }
        
        const todoList = document.querySelectorAll(".todo-container")
        todoList.forEach(todo => {
            switch(filter) {
                case "All":
                    todo.style.display = "flex"
                    break
                case "Active":
                    if(todo.children[0].children[1].classList.contains("completed")) {
                        todo.style.display = "none"
                    } else {
                        todo.style.display = "flex"
                    }
                    break
                case "Completed":
                    if(todo.children[0].children[1].classList.contains("completed")) {
                        todo.style.display = "flex"
                    } else {
                        todo.style.display = "none"
                    }
                    break
                default:
                    break
            }

        })
    }


    useEffect(() => {
        console.log("todo", todos)
    }, [todos])

  return (
    <main>
        <h1 class="title">TODO</h1>
        <TodoForm todo={todo} setTodo={setTodo} handleChange={handleChange} handleSubmit={handleSubmit} />
        <TodoList todos={todos} nbCompleted={nbCompleted} deleteTodo={deleteTodo} completeTodo={completeTodo} handleFilter={handleFilter}/>
    </main>
  )
}
