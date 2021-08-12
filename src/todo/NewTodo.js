function NewTodo() {
    return(
        <label type="text" name="New To Do" for="new_to_do">
            <p>New Todo</p>
            <input type="text" name="new_to_do" placeholder="To Do"></input>
        </label>
    )
}

export default NewTodo;