export default function Todo(todo){
    return `
    <h3 class="todo__name" id="${todo.id}">${todo.name} by ${todo.owner}</h3>
    `
}