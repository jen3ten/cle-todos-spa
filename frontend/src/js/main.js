import Header from './components/Header';
import Home from './components/Home';
import Todos from './components/Todos';
import Owners from './components/Owners';
import TodoEdit from './components/TodoEdit';
import OwnerEdit from './components/OwnerEdit';
import apiActions from './api/apiActions';

export default pageBuild;

function pageBuild() {
  header();
  // footer();
  navHome();
  navTodo();
  navOwners();
}

const app = document.querySelector('#app');

function header() {
    const header = document.querySelector("#header");
    header.innerHTML = Header();
}

function navHome() {
  const homeButton = document.querySelector(".nav__home");
  homeButton.addEventListener("click", function() {
    document.querySelector("#app").innerHTML = Home();
  });
}

function navTodo() {
    const todosButton = document.querySelector(".nav__todos");

    // Get Todos
    todosButton.addEventListener("click", function() {
      apiActions.getRequest("https://localhost:44393/api/todo",
          todos => {
              console.log(todos);
              app.innerHTML = Todos(todos);
          }
      )
    });

    // Delete Todos
    app.addEventListener("click", function(){
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

    // Post Todos
    app.addEventListener("click", function(){
        if(event.target.classList.contains('add-todo__submit')){
            const todo = event.target.parentElement.querySelector('.add-todo__todoName').value;
            console.log(todo);

            var requestBody = {
              Name: todo,
              OwnerId: 2
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

    // Edit Todos
    app.addEventListener("click", function(){
      if(event.target.classList.contains('edit-todo__edit')){
        const todoId = event.target.parentElement.querySelector('.todo__id').value;
        console.log(todoId);

        apiActions.getRequest(
          `https://localhost:44393/api/todo/${todoId}`,
          toDoEdit => {
            console.log(toDoEdit);
            app.innerHTML = TodoEdit(toDoEdit);
          }
        )
      }
    })

    app.addEventListener("click", function(){
      if(event.target.classList.contains('update-todo__submit')){
        const todoId = event.target.parentElement.querySelector('.update-todo__id').value;
        const todoName = event.target.parentElement.querySelector('.update-todo__name').value;
        const todoOwner = event.target.parentElement.querySelector('.update-todo__owner').value;

        console.log(todoId);

        const todoData = {
          id: todoId,
          name: todoName,
          owner: todoOwner
        };

        console.log(todoData);
        console.log(JSON.stringify(todoData));


        apiActions.putRequest(
          `https://localhost:44393/api/todo/${todoId}`,
          todoData,
          todos => {
            console.log(todos);
            app.innerHTML = Todos(todos);
          }
        );
      }
    });

  }

  function navOwners(){
    const ownersButton = document.querySelector(".nav__owners");

    // Get Owners
    ownersButton.addEventListener("click", function(){
      apiActions.getRequest("https://localhost:44393/api/owner",
        owners => {
            console.log(owners);
            app.innerHTML = Owners(owners);
        }
      )
    });

    // Delete Owners
    app.addEventListener("click", function(){
      if(event.target.classList.contains('delete-owner__submit')){
        const ownerId = event.target.parentElement.querySelector('.owner__id').value;
        console.log(ownerId);

        apiActions.deleteRequest(
          `https://localhost:44393/api/owner/${ownerId}`,
          owners => {
            app.innerHTML = Owners(owners);
          }
        )
      }
    })

    // Post Owners
    app.addEventListener("click", function(){
      if(event.target.classList.contains('add-owner__submit')){
          const owner = event.target.parentElement.querySelector('.add-owner__ownerName').value;
          console.log(owner);

          var requestBody = {
            Name: owner
          }
          apiActions.postRequest(
              "https://localhost:44393/api/owner",
              requestBody,
              owners => {
                  console.log("Owners returned from back end");
                  console.log(owners);
                  app.innerHTML = Owners(owners);
              }
          )
      }
    })

        // Edit Owners
        app.addEventListener("click", function(){
          if(event.target.classList.contains('edit-owner__submit')){
            const ownerId = event.target.parentElement.querySelector('.owner__id').value;
            console.log(ownerId);
    
            apiActions.getRequest(
              `https://localhost:44393/api/owner/${ownerId}`,
              ownerEdit => {
                console.log(ownerEdit);
                app.innerHTML = OwnerEdit(ownerEdit);
              }
            )
          }
        })
    
        app.addEventListener("click", function(){
          if(event.target.classList.contains('update-owner__submit')){
            const ownerId = event.target.parentElement.querySelector('.update-owner__id').value;
            const ownerName = event.target.parentElement.querySelector('.update-owner__name').value;
    
            console.log(ownerId);
    
            const ownerData = {
              id: ownerId,
              name: ownerName
            };
    
            console.log(ownerData);
            console.log(JSON.stringify(ownerData));
    
    
            apiActions.putRequest(
              `https://localhost:44393/api/owner/${ownerId}`,
              ownerData,
              owners => {
                console.log(owners);
                app.innerHTML = Owners(owners);
              }
            );
          }
        });

  }
