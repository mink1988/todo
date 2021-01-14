import React from 'react'


const Todo = ({todo, todos, setTodos}) => { 

    const completedHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }

            return item
        }))
    }
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))

    }

    
    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
               
               <div className={`${ todo.completed ? 'completed' : 'not-completed' }`}>
                   <div className="name">{todo.name}</div>
                </div>
               
               <div>
                   <i onClick={completedHandler} className={` fas fa-check cp ${ todo.completed ? 'completed' : 'not-completed'}`}></i>
                   <i onClick={deleteHandler} className="fas fa-trash cp"></i>
               </div>
               
            </div>
        </div>
    )
}

export default Todo
