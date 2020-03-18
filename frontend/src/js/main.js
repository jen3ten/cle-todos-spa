import Header from './components/Header';
import Home from './components/Home';
import Todos from './components/Todos';
import apiActions from './api/apiActions';

export default pageBuild;

function pageBuild() {
    header();
    // footer();
    navHome();
    navTodo();
}

function header() {
    const header = document.querySelector("#header");
    header.innerHTML = Header(); 
}
  
// function footer() {
//     const footer = document.querySelector("#footer");
//     footer.innerHTML = Footer();
// }

function navHome() {
  const homeButton = document.querySelector(".nav__home");
  homeButton.addEventListener("click", function() {
    document.querySelector("#app").innerHTML = Home();
  });
}

//const todosButton = document.querySelector(".nav__todos");
function navTodo() {
    const todosButton = document.querySelector(".nav__todos");
    const app = document.querySelector('#app');

    todosButton.addEventListener("click", function() {
        apiActions.getRequest("https://localhost:44393/api/todo",
            todos => {
                console.log(todos);
                app.innerHTML = Todos(todos);
            }
        )
      });

    //todoButtonClick();

    app.addEventListener("click", function(){
        if(event.target.classList.contains('add-todo__submit')){
            const todo = event.target.parentElement.querySelector('.add-todo__todoName').value;
            console.log(todo);

            var requestBody = {
              Name: todo,
              Owner: "Jen"
            }
            apiActions.postRequest(
                "https://localhost:44393/api/todo",
                requestBody,
                toDos => {
                    console.log("Todos returned from back end");
                    console.log(toDos);
                    app.innerHTML = Todos(toDos);
                }
            )
        }
    })

    app.addEventListener("click", function(){
      console.log(event.target);
      if(event.target.classList.contains('delete-todo__submit')){
        const todoId = event.target.parentElement.querySelector('.todo__id').value;
        console.log(todoId);

        apiActions.deleteRequest(
          `https://localhost:44393/api/todo/${todoId}`,
          toDos => {
            app.innerHTML = Todos(toDos);
          }
        )
      }
    })
  }

// var todoButtonClick = todosButton.addEventListener("click", function() {
//   apiActions.getRequest("https://localhost:44393/api/todo",
//       todos => {
//           console.log(todos);
//           app.innerHTML = Todos(todos);
//       }
//   )
// });

