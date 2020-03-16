export default function Todos(todos) {
  console.log(`in the todo component ${todos}`);
  return `
    <ul> 
        ${todos
          .map(todo => {
            return `
            <li>
                <h3>${todo}</h3>
            </li>
            `;
          })
          .join("")}
    </ul>

    <section class="add-todo">
          <input class="add-todo__todoName" type="text" placeholder="Add a Todo!">
          <button class="add-todo__submit">Add Todo</button>
    </section>
    `;
}
