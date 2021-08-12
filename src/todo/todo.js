import NewTodo from "./NewTodo";
import { dummyData} from "../dummydata/dummyData"

function Todo() {
    const dummyDataArray = [];
    return(
    <> 
        <ul>
            {dummyData.map((todoItem) =>
                <li>{todoItem.todoDescription}
                    {console.log(todoItem)}
                </li>
            )}
        </ul>
        <NewTodo />
    </>
    );
}

export default Todo;