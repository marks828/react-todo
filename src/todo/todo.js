import NewTodo from "./NewTodo";
import { dummyData} from "../dummydata/dummyData"
import { useEffect, useState } from "react";

function Todo() {


    const [todos, setTodos] = useState(dummyData);
    // useEffect( () => {
    //     console.log(todos)
    // }, [todos])
    // const [count, setCount] = useState(0);
    
    return(
    <> 
        <ul>
            {dummyData.map((todoItem) =>
                <li>
                    {todoItem.todoDescription}
                    {console.log(todoItem)}
                    
                </li>
            )}
        </ul>
        
        <NewTodo />
        <button onClick={ () => setTodos([...todos, NewTodo])  }>add to do</button>
       
    </>
    );
}

export default Todo;