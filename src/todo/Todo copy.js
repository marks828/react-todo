import { dummyData} from "../dummydata/dummyData"
import { useState } from "react";
import {nanoid} from 'nanoid'

function Todo2(props) {

    const [todos, setTodos] = useState(dummyData);
    const [input, setInput] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setInput('')
    }

    function toggleTodoCompleted(id) {
        const updatedTodos = todos.map(todo => {
            if(id === todo.id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        console.log(updatedTodos)
        setTodos(updatedTodos)
    }

    function deleteTodo(id){
        const deleteTodoFromList = todos.filter(todo => id !== todo.id)
        setTodos(deleteTodoFromList)
    }

    function editTodo(id, newName) {
        const editedTodoList = todos.map(todo =>{
            if(id === todo.id){
                return{...todo, name:newName}
            };
            return todo
        })
        setTodos(editedTodoList)
    }


    const isEditingisTrue = (
        <> 
        <ul>
            {todos.map((todoItem) =>
                <li>
                    <p id={todoItem.id}>
                        <input type="checkbox"></input>
                        {todoItem.todoDescription}
                    </p>
                    <button onClick={ () => setIsEditing(true) }>Edit</button>
                    <button>Delete</button>
                </li>
            )}
        </ul>
        <form onSubmit={handleSubmit}>
            <label type="text" name="New To Do" for="new_to_do">
                <p>New Todo</p>
                <input type="text" name="new_to_do" placeholder="To Do" value={input} onChange={ (event) => setInput(event.target.value) }></input>
            </label>
            <button id="add-new-task" onClick={ () => setTodos([...todos, {todoDescription: input, id: nanoid()}])  }>add to do</button>
        </form>
    </>
    );
    
    const isEditingisFalse = (
        <> 
        <ul>
            {todos.map((todoItem) =>
                <li>
                    <form onSubmit={handleSubmit}>
                    <label 
                        type="text" 
                        name="New To Do" 
                        for="new_to_do"
                    >
                        <input 
                            type="text" 
                            name="new_to_do" 
                            placeholder="To Do" 
                            value={todoItem.todoDescription}
                        ></input>
                    </label>
                    <button>Save</button>
                    <button onClick={()=> setIsEditing(false)}>Cancel</button>
                </form>
                </li>
            )}
        </ul>
    </>
    )
    
    return(
        <> 
        {isEditing ? isEditingisFalse : isEditingisTrue}
        {/* <ul>
            {todos.map((todoItem) =>
                <li>
                    <p id={todoItem.id} className={todoItem.completed ? 'completed' : 'not-completed'}>
                        <input 
                            type="checkbox"
                            onChange={() => toggleTodoCompleted(todoItem.id)}
                        >
                        </input>
                        {todoItem.todoDescription}
                    </p>
                    <button>Edit</button>
                    <button 
                        onClick={ () => deleteTodo(todoItem.id)}
                    >Delete</button>
                </li>
            )}
        </ul>
        <form onSubmit={handleSubmit}>
            <label type="text" name="New To Do" for="new_to_do">
                <p>New Todo</p>
                <input type="text" name="new_to_do" placeholder="To Do" value={input} onChange={ (event) => setInput(event.target.value) }></input>
            </label>
            <button id="add-new-task" onClick={ () => setTodos([...todos, {todoDescription: input, id: nanoid()}])  }>add to do</button>
        </form> */}

    </>
    );
}

export default Todo2;
