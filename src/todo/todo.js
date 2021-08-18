import NewTodo from "./NewTodo";
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
        
        <NewTodo />
        <button onClick={ () => setTodos([...todos, NewTodo])  }>add to do</button>
       
    </>
    );
}

export default Todo;