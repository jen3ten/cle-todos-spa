export default function Todos(todos){
    console.log("in todos component")
    return `
    <h1>List of Todos</h1>
    <ol>
        ${todos.map(todo => {
            return `
                <li>${todo.name} by ${todo.owner}</li>
            `
        }).join("")}
    </ol>
    <button class="todos__inspire">Inspire Me</button>
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