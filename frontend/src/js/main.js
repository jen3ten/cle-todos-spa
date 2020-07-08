import Header from "./components/Header";

header();

function header() {
    const headerElement = document.querySelector('.header');
    header.innerHTML = Header();

    // header.innerHTML = 
    // `<nav class="nav__header">
    //     <ul>
    //         <li>Home</li>
    //         <li>ToDos</li>
    //         <li>Owners</li>
    //     </ul>
    // </nav>
    // `
}
