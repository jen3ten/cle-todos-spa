export default function Owners(owners){
    return `
        <h1>List of Owners</h1>
        <ul>
            ${owners.map(owner => {
                return `
                <li>${owner.name}'s Todos:
                    <ol>
                    ${owner.todos.map(todo =>{
                        return`
                        <li>${todo.name}</li>
                        `
                    }).join("")}
                    </ol>
                </li>
                `
            }).join("")}
        </ul>
    `
}