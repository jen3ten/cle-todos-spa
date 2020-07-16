import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Owners from "./components/Owners";
import Owner from "./components/Owner";
import apiActions from "./api/apiActions";

const appDiv = document.querySelector('.app'); 

//pageBuild();

export default function pageBuild(){
    header();
    footer();
    navHome();
    navTodos();
    navOwners();
    //ownerNameButton();
    ownerNameButtonv2();
    ownerNameButtonv3();
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

function ownerNameButton() {
    const ownerNameElements = document.querySelectorAll('.owner__name');
    ownerNameElements.forEach(element=> {
        element.addEventListener('click', function(){
            const ownerId = element.id;
            console.log(`owner name was clicked, owner id ${ownerId}`);
            fetch(`https://localhost:44393/api/owner/${ownerId}`)
            .then(response => response.json())
            .then(owner => appDiv.innerHTML = Owner(owner))
            .catch(err => console.log(err))
        })
    })
}

function ownerNameButtonv2(){
    appDiv.addEventListener('click', function(){
        if(event.target.classList.contains('owner__name')){
            const ownerIdv2 = event.target.id;
            console.log(`owner name v2 was clicked, owner id ${ownerIdv2}`);
        }
    })
}

function ownerNameButtonv3(){
    appDiv.addEventListener('click', function(){
        if(event.target.classList.contains('owner__name')){
            const ownerIdv3 = event.target.parentElement.querySelector('.owner__id').value;
            console.log(`owner name v3 was clicked, owner id ${ownerIdv3}`);
        }
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
    const todosEndpoint = 'https://localhost:44393/api/todo';
    const todosCallback = function(todos){
        appDiv.innerHTML = Todos(todos)
    }
    todosButton.addEventListener('click', function(){
        apiActions.getRequest(todosEndpoint, todosCallback);
    //     fetch('https://localhost:44393/api/todo')
    //     .then(response => response.json())
    //     .then(todos => {
    //         appDiv.innerHTML = Todos(todos)
    //     })
    //     .catch(err => console.log(err))
     })
    }

// Then show generic fetch request using apiactions

function navOwners() {
    const ownerButton = document.querySelector('.nav__owners');
    const ownersEndpoint = 'https://localhost:44393/api/owner';
    const ownersCallback = owners => {
        appDiv.innerHTML = Owners(owners)
        ownerNameButton();
    }
    ownerButton.addEventListener('click', function(){
        apiActions.getRequest(ownersEndpoint,ownersCallback);
        // fetch('https://localhost:44393/api/owner')
        // .then(response => response.json())
        // .then(owners => {
        //     appDiv.innerHTML = Owners(owners)
        //     ownerNameButton();
        // })
        // .catch(err => console.log(err))
    })
}

    // When the user clicks the submit Todo button, we will call the post fetch request
    // and send the new values for Todo Name and Owner id to the backend
    // and then redisplay the Owner component 
    appDiv.addEventListener("click", function(){
        if(event.target.classList.contains('owner__add-todo__submit')){
            const ownerId = event.target.id;
            const todoName = event.target.parentElement.querySelector('.owner__add-todo__name').value;
            console.log(`owner id:${ownerId}, todo name:${todoName}`);

            const requestBody = {
                Name: todoName,
                OwnerId: ownerId
            }

            const ownerCallback = (todos) => {
                apiActions.getRequest(`https://localhost:44393/api/owner/${ownerId}`,
                owner => {
                    console.log(owner);
                    appDiv.innerHTML = Owner(owner);
                })
            }

            apiActions.postRequest(
                `https://localhost:44393/api/todo`,
                requestBody,
                ownerCallback
            )

        }
    })