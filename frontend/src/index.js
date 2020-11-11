// import main from "./js/main";

// main();

// document.querySelector('.app').innerText = "hello"

import Header from './js/components/Header';

header();

function header(){
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}