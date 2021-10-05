import { useState } from "react"
import { dummyData } from "../dummydata/dummyData"

function TodoItem(props) {

    const [nameValue, setNameValue] = useState("")

return(
    <>
    
        {props.todoItem.isEditing ?
            <li>
                    <input
                        value = {nameValue}
                        placeholder={props.todoItem.todoDescription}
                        onChange={(e) => setNameValue(e.target.value)}
                    ></input>

                    <button
                        onClick={() => {
                            props.updateName(props.todoItem.id, nameValue)
                            props.updateEditStatus(props.todoItem.id)
                        }}
                    >Save
                    </button>
                    <button
                        onClick={() => props.updateEditStatus(props.todoItem.id)}
                    >Cancle</button>
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
