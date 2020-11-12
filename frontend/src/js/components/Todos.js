export default function Todos(todos){
    console.log("in todos component")
    return `
    <h1>List of Todos</h1>
    <ol>
        ${todos.map(todo => {
            return `
                <li><h3 class="todo__name" id="${todo.id}">${todo.name}</h3> by ${todo.owner}</li>
            `
        }).join("")}
    </ol>
    <button class="todos__inspire">Inspire Me with Ron Swanson</button>
    `
    // return `
    //     <h1>List of Todos</h1>
    //     <ol>
    //         <li>Buy groceries</li>
    //         <li>Text Mom</li>
    //         <li>Exercise</li>
    //     </ol>
    // `
}