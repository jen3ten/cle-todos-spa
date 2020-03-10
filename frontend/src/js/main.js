// document.querySelector('#app').innerText = "Hello, I'm here"
import Header from './components/Header';

pageBuild()

function pageBuild() {
    header();
}

function header() {
    const header = document.querySelector("#header");
    header.innerHTML = Header();
    // header.innerHTML = 
    // `<nav class='nav__header'>
    //     <ul>
    //         <li class='nav__home'>Home</li>
    //         <li class='nav__values'>Values</li>
    //         <li class='nav__todos'>ToDos</li>
    //     </ul>
    // </nav> ` 
  }
  
  function footer() {
    const footer = document.querySelector("#footer");
    footer.innerHTML = Footer();
  }