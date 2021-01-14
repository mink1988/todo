 import React, {useState} from 'react'
 import uuid from 'react-uuid'
 
 const Form = ( { todos, setTodos} ) => {

    const [name, setName] = useState ('')
    const [submitState, setSubmitState] = useState(true)

    const nameHandler = (e) => {
      e.target.value.length >= 2 ? setSubmitState(false) : setSubmitState(true)
      setName(e.target.value)
    }

    const submitHandler = (e) => {
      e.preventDefault()

      setTodos([ ...todos, { name: name, completed: false, id: uuid()}])
      setName('')
      setSubmitState(true)
    }

 
     return (
         <form>
           
            <div className="mb-3">
              <label htmlFor="Todo-input">Create a new Todo:</label>
               <input onChange={nameHandler} value={name} type="text" id="Todo-input" className="form-control"/>
            </div>
            
             <div className="mb-3">
               <button onClick={submitHandler} disabled={submitState} type="submit" className="btn btn-secondary w-100 p-3">Add Todo</button>
             </div>
         
         </form>
     )
 }
 
 export default Form
 