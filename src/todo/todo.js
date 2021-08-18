import NewTodo from "./NewTodo";
import { dummyData} from "../dummydata/dummyData"
import { useEffect, useState } from "react";

function Todo() {


    const [todos, settodos] = useState();
    const [count, setCount] = useState(0);

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
        {count}
        <button onClick={() => setCount(count + 1)}>Count</button>
        <button onClick={() => setCount(0)}>reset</button>
        <NewTodo />
    </>
    );
}

export default Todo;