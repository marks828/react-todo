import { useState } from "react"
import { dummyData } from "../dummydata/dummyData"

function TodoItem(props) {

    const [todos, setTodos] = useState(dummyData);
    const [nameValue, setNameValue] = useState()

return(
    <>
    
        {props.todoItem.isEditing ?
            <li>
                <form onSubmit={props.handleSaveTodoSubmit}>
                    <input
                        value = {nameValue}
                        placeholder={props.todoItem.todoDescription}
                        onChange={(e) => setNameValue(e.target.value)}
                    ></input>

                    <button
                        onClick={() => props.setUpdatedTodo([...props.todos, { todoDescription: nameValue, isEditing: false }])}
                    >Save
                    </button>
                    <button
                        onClick={() => props.updateEditStatus(props.todoItem.id)}
                    >Cancle</button>
                </form>
            </li>

            :

            <li>
                <p id={props.todoItem.id} className={props.todoItem.completed ? 'completed' : 'not-completed'}>
                    <input
                        type="checkbox"
                        onChange={() => props.toggleTodoCompleted(props.todoItem.id)}
                    >
                    </input>
                    {props.todoItem.todoDescription}
                </p>
                <button
                    onClick={() => props.updateEditStatus(props.todoItem.id)}
                >Edit</button>
                <button
                    onClick={() => props.deleteTodo(props.todoItem.id)}
                >Delete</button>
            </li>
        }
    </>
    )

}
export default TodoItem;