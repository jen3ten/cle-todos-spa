export default function Todos(todos){
    console.log(`in the todo component ${todos}`)
    return `
    <ol> 
        ${todos.map(todo => {
            return `
            <li>
                <h4>${todo.name} by ${todo.owner}</h4>
                <button class="delete-todo__submit">Delete</button>
                <input class="todo__id" type="hidden" value="${todo.id}">
            </li>
            `
        }).join("")}
    </ol>

    <section class="add-todo">
            <input class="add-todo__todoName" type="text" placeholder="Add a Todo here">
            <button class="add-todo__submit">Add a Todo</button>
    </section>
    `
}
