export default function Todos(todos){
    return `
        <h1>List of Todos</h1>
        <ol>
            ${todos.map(todo => {
                return `
                <li class='todo-items'>
                    <h3>${todo.name} by ${todo.owner.name}</h3>
                    <button class='todo-items__edit'>Edit</button>
                    <button class='todo-items__delete'>Delete</button>
                    <input class='todo-items__id' type='hidden' value='${todo.id}'>
                </li>
                `
            }).join("")}
        </ol>
    `
}