export default function Owner(owner){
    return `
        <h1>${owner.name}</h1>
        <ol>
            ${owner.todos.map(todo =>{
                return `
                <li>
                    <h4>${todo.name}</h4>
                    <button class='todo-item__edit'>Edit</button>
                    <button class='todo-item__delete'>Delete</button>
                    <input class='todo-item__id' type='hidden' value='${todo.id}'>
                </li>
                `
            }).join("")}
        </ol>

        <section class="owner__add-todo">
            <input class="ownerAddTodoButton" type="text" placeholder="Add a new to do here"></input>
            <button class="owner__add-todo__submit" id="${owner.id}">Add a Todo for ${owner.name}</button>
        </section>
    `
}