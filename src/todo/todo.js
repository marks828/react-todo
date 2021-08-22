import { dummyData} from "../dummydata/dummyData"
import { useEffect, useState } from "react";

function Todo() {

    const [todos, setTodos] = useState(dummyData);
    const [input, setInput] = useState("")
    // const [checked, setChecked] = useState(false)

    function handleChange(e){
        console.log(e.target.checked)
        boxChecked = e.target.checked

    }
    return(
    <> 
        <ul>
            {todos.map((todoItem) =>
                <li>
                    <p>
                        <input type="checkbox" onChange={ handleChange }></input>
                        {todoItem.todoDescription}
                    </p>
                </li>
            )}
        </ul>
        
        <label type="text" name="New To Do" for="new_to_do">
            <p>New Todo</p>
            <input type="text" name="new_to_do" placeholder="To Do" value={input} onChange={ (event) => setInput(event.target.value) }></input>
        </label>

        <button onClick={ () => setTodos([...todos, {todoDescription: input, id: todos.length + 1}])  }>add to do</button>
       
    </>
    );
}

export default Todo;
