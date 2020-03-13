export default function Todos(todos){
    console.log(`in the todo component ${todos}`)
    return `
    <ul> 
        ${todos.map(todo => {
            return `
            <li>
                <h3>${todo}</h3>
            </li>
            `
        }).join("")}
</ul>
    `
}