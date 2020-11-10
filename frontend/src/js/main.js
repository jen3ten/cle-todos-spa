import Header from './components/Header';

export default header();

function header(){
    const headerElement = document.querySelector('.header');
    header.innerHTML = Header();
}

