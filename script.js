function toggleMode() {
    const html = document.documentElement;

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

}



function  toggleTextOverPor() {
    const text = document.querySelector('#text');
    text.textContent = 'Em Breve';
}

function  toggleTextOutPor() {
    const text = document.querySelector('#text');
    text.textContent = 'Portifolio';
}




function  toggleTextOverIns() {
    const text = document.querySelector('#text2');
    text.textContent = 'Em Breve';
}

function  toggleTextOutIns() {
    const text = document.querySelector('#text2');
    text.textContent = 'Instagram';
}
