// export default () => {
//     document.querySelector('.app').innerText = "hello"
// }

// component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Todos from './components/Todos';
import Todo from './components/Todo';

export default function pageBuild(){
    header();
    footer();
    navHome();
    navTodos();
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

function todosInspire(){
    const inspireButton = document.querySelector('.todos__inspire');
    inspireButton.addEventListener('click', function(){
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


