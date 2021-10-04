import { useState } from "react"
import { dummyData } from "../dummydata/dummyData"

function TodoItem(props) {

    const [todos, setTodos] = useState(dummyData);
    const [editingInput, setEditingInput] = useState()

    

return(
    <>
    {todos.map((todoItem) =>
            todoItem.isEditing ?
                <li>
                    <form onSubmit={handleSaveTodoSubmit}>
                        <input
                            placeholder={todoItem.todoDescription}
                        ></input>

                        <button
                            onClick={() => setUpdatedTodo([...todos, { todoDescription: input, isEditing: false }])}
                        >Save
                        </button>
                        <button
                            // onClick={() => updateEditStatus(todoItem.id)}
                        >Cancle</button>
                    </form>
                </li>

                :

                <li>
                    <p id={todoItem.id} className={todoItem.completed ? 'completed' : 'not-completed'}>
                        <input
                            type="checkbox"
                            onChange={() => toggleTodoCompleted(todoItem.id)}
                        >
                        </input>
                        {todoItem.todoDescription}
                    </p>
                    <button
                        onClick={() => updateEditStatus(todoItem.id)}
                    >Edit</button>
                    <button
                        onClick={() => deleteTodo(todoItem.id)}
                    >Delete</button>
                </li>



        )
    }
    </>
    )

}
export default TodoItem;