import React from 'react'

export default function TodoForm({todo, handleChange ,handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className="todo-form" >
        <div class="form-wrap">
            <div>
              <i class="icon-google-task"></i>
              <input type="text" placeholder="Add a task here" value={todo} onChange={handleChange} name="todo" className="todo-input" />
            </div>
            <button className="todo-button">Add</button>
        </div>
    </form>
  )
}
