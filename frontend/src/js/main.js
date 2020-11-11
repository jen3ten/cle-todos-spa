// export default () => {
//     document.querySelector('.app').innerText = "hello"
// }

// component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Todos from './components/Todos';

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
        document.querySelector('.app').innerHTML = Home();
    })
}

function navTodos(){
    const todosButton = document.querySelector('.nav__todos');
    todosButton.addEventListener('click', function(){
        document.querySelector('.app').innerHTML = Todos();
    })
}


