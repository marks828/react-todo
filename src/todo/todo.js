import { dummyData} from "../dummydata/dummyData"
import { useState } from "react";
import {nanoid} from 'nanoid'

function Todo(props) {

    const [todos, setTodos] = useState(dummyData);
    const [input, setInput] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    // const [checked, setChecked] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setInput('')
    }

    function editTodo(id, newName) {
        const editedTodoList = todos.map(task => {
        // if this task has the same ID as the edited task
            if (id === task.id) {
            //
            return {...task, name: newName}
            }
            return task;
        });
        setTodos(editedTodoList);
    }

    const isEditingisFalse = (
        <> 
        <ul>
            {todos.map((todoItem) =>
                <li>
                    <p id={todoItem.id}>
                        <input type="checkbox"></input>
                        {todoItem.todoDescription}
                    </p>
                    <button>Edit</button>
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
    
    const isEditingisTrue = (
        <> 
        <ul>
            {todos.map((todoItem) =>
                <li>
                    <p id={todoItem.id}>
                        <input type="checkbox"></input>
                        {todoItem.todoDescription}
                    </p>
                    <button>Save</button>
                    <button>Cancel</button>
                </li>
            )}
        </ul>
        <form onSubmit={handleSubmit}>
            <label type="text" name="New To Do" for="new_to_do">
                <p>Edit Todo Name</p>
                <input type="text" name="new_to_do" placeholder="To Do" value={input} onChange={ (event) => setInput(event.target.value) }></input>
            </label>
            <button id="add-new-task" onClick={ () => setTodos([...todos, {todoDescription: input, id: nanoid()}])  }>Update Todo</button>
        </form>
    </>
    )
    
    return(
        <> 
        <ul>
            {todos.map((todoItem) =>
                <li>
                    <p id={todoItem.id}>
                        <input type="checkbox"></input>
                        {todoItem.todoDescription}
                    </p>
                    <button>Edit</button>
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
}

export default Todo;
