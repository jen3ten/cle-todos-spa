import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Owners from "./components/Owners"

const appDiv = document.querySelector('.app'); 

//pageBuild();

export default function pageBuild(){
    header();
    footer();
    navHome();
    navTodos();
    navOwners();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function footer(){
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function navHome() {
    const homeButton = document.querySelector('.nav__home');
    homeButton.addEventListener('click', function(){
        document.querySelector('.app').innerHTML = Home();
    })
}

// Show console log first
// function navTodos() {
//     const todosButton = document.querySelector('.nav__todos');
//     todosButton.addEventListener('click', function(){
//         fetch('https://localhost:44393/api/todo')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//     })
// }

// Then show fetch request in todos
function navTodos() {
    const todosButton = document.querySelector('.nav__todos');
    todosButton.addEventListener('click', function(){
        fetch('https://localhost:44393/api/todo')
        .then(response => response.json())
        .then(todos => {
            appDiv.innerHTML = Todos(todos)
        })
        .catch(err => console.log(err))
    })
}

// Then show generic fetch request using apiactions

function navOwners() {
    const ownerButton = document.querySelector('.nav__owners');
    ownerButton.addEventListener('click', function(){
        fetch('https://localhost:44393/api/owner')
        .then(response => response.json())
        .then(owners => {
            appDiv.innerHTML = Owners(owners)
        })
        .catch(err => console.log(err))
    })
}