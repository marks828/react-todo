import { useState } from "react";
import { nanoid } from 'nanoid'
import { dummyData } from "../dummydata/dummyData"
import TodoItem from "./TodoItem";

function Todo(props) {

    const [todos, setTodos] = useState(dummyData);
    const [input, setInput] = useState('')

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
        setTodos(updatedTodos)
    }


    function updateEditStatus(id) {
        const editedTodoList = todos.map(todo => {
            if (id === todo.id) {
                return { ...todo, isEditing: !todo.isEditing }
            };
            return todo
        })
        return setTodos(editedTodoList)
    }
    

    function handleUpdatedTodo(id, updatedTodoDescrition) {
        const updatedItem = todos.map(todo => {
            return todo.id === id ? updatedTodoDescrition : todo;
        });
        setTodos(updatedItem)
    }

    function deleteTodo(id) {
        const deleteTodoFromList = todos.filter(todo => id !== todo.id)
        setTodos(deleteTodoFromList)
    }


    return (
        <>
            <ul>
            {todos.map((todoItem) =>
                <TodoItem
                    todos = {todos}
                    todoItem = {todoItem}
                    deleteTodo = {deleteTodo}
                    toggleTodoCompleted = {toggleTodoCompleted}
                    updateEditStatus = {updateEditStatus}
                    handleUpdatedTodo = {handleUpdatedTodo}
                />
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
