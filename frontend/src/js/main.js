// component imports
import Header from './components/Header';

export default function pageBuild(){
    header();
}

function header(){
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}



