import { dummyData} from "../dummydata/dummyData"
import { useEffect, useState } from "react";

function Todo() {


    const [todos, setTodos] = useState(dummyData);
    const [input, setInput] = useState("")
    
    return(
    <> 
        <ul>
            {todos.map((todoItem) =>
                <li>
                    {todoItem.todoDescription}
                </li>
            )}
        </ul>
        
        <label type="text" name="New To Do" for="new_to_do">
            <p>New Todo</p>
            <input type="text" name="new_to_do" placeholder="To Do" value={input} onChange={ (event) => setInput(event.target.value) }></input>
        </label>

        <button onClick={ () => setTodos([...todos, {description: input, id: todos.length + 1}])  }>add to do</button>
       
    </>
    );
}

export default Todo;
