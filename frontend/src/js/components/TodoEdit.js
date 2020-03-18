export default function TodoEdit(todo){
    return `
        <section class="content__todo">
            <h4>${todo.name}</h4>
        </section>

        <section class="update-todo">
            <input class="update-todo__name" type="text" value="${todo.name}">
            <input class="update-todo__owner" type="text" value="${todo.owner}">
            <input class="update-todo__id" type="hidden" value="${todo.id}">
            <button class="update-todo__submit">Save Changes</button>
        </section>

    `;
}