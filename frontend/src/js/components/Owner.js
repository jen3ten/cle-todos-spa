export default function Owner(owner){
    return `
        <h1 class="name">${owner.name}</h1>
        <ul class="todo__list">
            ${owner.todos.map(todo => {
                return `
                <li>
                    <h4 class="todo__name">${todo.name}</h4>
                </li>
                `
            }).join("")}
        </ul>    
    `
}