export default function Todos(todos, ownerList){
    return `
    <ol> 
        ${todos.map(todo => {
            return `
            <li>
                <h4 class="todo__items">${todo.name} by ${todo.owner.name}</h4>
                <button class="edit-todo__edit">Edit</button>
                <button class="delete-todo__submit">Delete</button>
                <input class="todo__id" type="hidden" value="${todo.id}">
            </li>
            `
        }).join("")}
    </ol>

    <section class="add-todo">
            <input class="add-todo__todoName" type="text" placeholder="Add a Todo here">
            <select class="add-todo__todoOwners" name="owner">
                ${ownerList.map(owner => {
                    return `
                        <option class="add-todo__ownerId" value="${owner.id}">${owner.name}</option>
                    `
                }).join("")}
            </select>
            <button class="add-todo__submit">Add a Todo</button>
    </section>
    `
}
