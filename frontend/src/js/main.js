// export default () => {
//     document.querySelector('.app').innerText = "hello"
// }

// component imports
import Header from './components/Header';

export default function pageBuild(){
    header();
}

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



