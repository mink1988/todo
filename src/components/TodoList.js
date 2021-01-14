import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    
    if (todos.length === 0) {
        return (
            <div id="TodoList" className="mt-3 mb-5 text-center">
                No todos found. Please add a todo.
        
            </div>
        )
    }
    
    
    return (
        <div id="TodoList" className="mt-3 mb-5">
            
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                    
                ))
            }
           
    
        </div>
    )
}

export default TodoList
