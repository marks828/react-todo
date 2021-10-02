import { dummyData } from "../dummydata/dummyData"
import { useState } from "react";
import { nanoid } from 'nanoid'

function Todo(props) {

    const [todos, setTodos] = useState(dummyData);
    const [input, setInput] = useState('')
    const [updatedTodo, setUpdatedTodo] = useState()

    function handleSubmit(e) {
        e.preventDefault();
        setInput('')
    }

    function toggleTodoCompleted(id) {
        const updatedTodos = todos.map(todo => {
            if (id === todo.id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        console.log(updatedTodos)
        setTodos(updatedTodos)
    }

    function deleteTodo(id) {
        const deleteTodoFromList = todos.filter(todo => id !== todo.id)
        setTodos(deleteTodoFromList)
    }

    function updateEditingStatus(id, newName) {
        const editedTodoList = todos.map(todo => {
            if (id === todo.id) {
                return { ...todo, isEditing: !todo.isEditing }
            };
            return todo
        })
        console.log(editedTodoList)
        return setTodos(editedTodoList)
    }

    function handleUpdateToTodo(id, updatedTodo) {
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        })

    }

    return (
        <>
            <ul>
                {todos.map((todoItem) =>
                    todoItem.isEditing ?
                        <li>
                            <form onSubmit={handleSubmit}>
                                <input placeholder={todoItem.todoDescription}></input>

                                <button
                                    onClick={() => setTodos([...todos, { todoDescription: input }])}>Save</button>
                                <button
                                    onClick={() => updateEditingStatus(todoItem.id)}
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
                                onClick={() => updateEditingStatus(todoItem.id)}
                            >Edit</button>
                            <button
                                onClick={() => deleteTodo(todoItem.id)}
                            >Delete</button>
                        </li>



                )}
            </ul>
            <form onSubmit={handleSubmit}>
                <label type="text" name="New To Do" for="new_to_do">
                    <p>New Todo</p>
                    <input type="text" name="new_to_do" placeholder="To Do" value={input} onChange={(event) => setInput(event.target.value)}></input>
                </label>
                <button id="add-new-task" onClick={() => setTodos([...todos, { todoDescription: input, id: nanoid() }])}>add to do</button>
            </form>

        </>
    );
}

export default Todo;
