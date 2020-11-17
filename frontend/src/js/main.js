// export default () => {
//     document.querySelector('.app').innerText = "hello"
// }

// component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Todos from './components/Todos';
import Todo from './components/Todo';
import Owners from './components/Owners';
import Owner from './components/Owner';

export default function pageBuild(){
    header();
    footer();
    navHome();
    navTodos();
    navOwners();
}

const appDiv = document.querySelector('.app');

//export default header();

function header(){
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();

    // headerElement.innerHTML = 
    // `<nav class="nav__header">
    //     <ul>
    //         <li>Home</li>
    //         <li>ToDos</li>
    //         <li>Owners</li>
    //     </ul>
    // </nav>
    // `
}

function footer(){
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function navHome(){
    const homeButton = document.querySelector('.nav__home');
    homeButton.addEventListener('click', function(){
        appDiv.innerHTML = Home();
    })
}

function navTodos(){
    const todosButton = document.querySelector('.nav__todos');
    todosButton.addEventListener('click', function(){
        // appDiv.innerHTML = Todos(todos);
        console.log('todos button clicked')
        fetch("https://localhost:44393/api/todo")
            .then(response => response.json())
            .then(todos => {
                appDiv.innerHTML = Todos(todos);
                todosInspire()
                todoDetails()
            })
            .catch(err => console.log(err))
    })

}

function navOwners(){
    const ownersButton = document.querySelector('.nav__owners');
    ownersButton.addEventListener('click', function(){
        // fetch Owners from back end
        fetch("https://localhost:44393/api/owner")
        .then(response => response.json())
        .then(owners => {
            appDiv.innerHTML = Owners(owners);
            ownerNameButton();
        })
        .catch(error => console.log(error))
    })
}

function ownerNameButton(){
    const ownerNameElements = document.querySelectorAll('.owner__name');
    ownerNameElements.forEach(element => {
        element.addEventListener('click', function(){
            const ownerId = element.id;
            console.log(`clicked owner ${ownerId}`);
            fetch(`https://localhost:44393/api/owner/${ownerId}`)
            .then(response => response.json())
            .then(owner => {
                appDiv.innerHTML = Owner(owner);
                ownerAddTodo();
                ownerDeleteTodo();
            })
            .catch(err => console.log(err))
        })
    })
}

function ownerAddTodo(){
    const ownerAddTodoButton = document.querySelector('.owner__add-todo__submit');
    ownerAddTodoButton.addEventListener('click', function(){
        const ownerId = ownerAddTodoButton.id;
        const todoName = event.target.parentElement.querySelector('.ownerAddTodoButton').value;
        console.log(`owner id: ${ownerId}, todo name: ${todoName}`)

        const requestBody = {
            Name: todoName,
            OwnerId: ownerId
        }

        fetch(`https://localhost:44393/api/todo`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(todos => {
            appDiv.innerHTML = Todos(todos)
        })

    })
}

function ownerDeleteTodo(){
    const ownerDeleteTodoButtons = document.querySelectorAll('.todo-item__delete')
    ownerDeleteTodoButtons.forEach(button => {
        button.addEventListener('click', function(){
            const todoId = event.target.parentElement.querySelector('.todo-item__id').value;
            console.log(todoId);
            fetch(`https://localhost:44393/api/todo/${todoId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(todos => {
                appDiv.innerHTML = Todos(todos)
            })
            .catch(err => console.log(err))
        })
    })
}

function todosInspire(){
    const inspireButton = document.querySelector('.todos__inspire');
    inspireButton.addEventListener('click', function(){
        console.log('inspire clicked')
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
            .then(response => response.json())
            .then(quote => {
                inspireButton.remove();
                const quoteElement = document.createElement('h3');
                quoteElement.innerText = `${quote}`;
                appDiv.appendChild(quoteElement);
            })
    })
}

function todoDetails(){
    const todoButtons = document.querySelectorAll('.todo__name');
    todoButtons.forEach((todoButton) => {
        todoButton.addEventListener('click', function(){
            console.log(`todo details ${event.target.id} clicked`)
            const todoId = event.target.id;
            fetch(`https://localhost:44393/api/todo/${todoId}`)
                .then(response => response.json())
                .then(todo => {
                    appDiv.innerHTML = Todo(todo);
                })
                .catch(err => console.log(err))
        })
    })
}

// appDiv.addEventListener('click', function(){
//     const todoSection = document.querySelector('.add-todo');
//     if(event.target.classList.contains('add-todo__button')){

//     }
// })


