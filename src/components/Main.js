import React, {useState} from 'react'
import Form from './Form'
import TodoList from './TodoList'

function Main() {
    
    const [todos, setTodos] = useState ([])



    return (
        <main className="container mt-4">
            <div className="row">
              <div className="col-5">
                 <Form todos={todos} setTodos={setTodos} />
                </div>
              
                <div className="col-7 ps-5">
                  <TodoList todos={todos} setTodos={setTodos} />
                </div>
            
            </div>
        
        
        </main>
    )
}

export default Main
