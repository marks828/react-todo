import { useState } from "react"
import { dummyData } from "../dummydata/dummyData"

function TodoItem(props) {

    const [todos, setTodos] = useState(dummyData);
    const [editingInput, setEditingInput] = useState()

return(
    <>
    
            todoItem.isEditing ?
                <li>
                    <form onSubmit={props.handleSaveTodoSubmit}>
                        <input
                            placeholder={props.todoItem.todoDescription}
                        ></input>

                        <button
                            onChange={() => props.setUpdatedTodo([...todos, { todoDescription: props.input, isEditing: false }])}
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
    </>
    )

}
export default TodoItem;