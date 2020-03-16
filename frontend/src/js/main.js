import Header from './components/Header';
import Home from './components/Home';
import Todos from './components/Todos';
import apiActions from './api/apiActions';

export default pageBuild;

function pageBuild() {
    header();
    // footer();
    navHome();
    navTodos();
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

function navTodos() {
  const todosButton = document.querySelector(".nav__todos");
  todosButton.addEventListener("click", function() {
    apiActions.getRequest("https://localhost:44393/api/todos", toDos => {
      console.log(toDos);
    document.querySelector("#app").innerHTML = Todos(toDos);
    });
  });
}

