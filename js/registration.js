const btnReg = document.querySelector('.reg');

btnReg.addEventListener('click', register);

async function register(){
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const psw = document.querySelector('#psw').value;
    const psw2 = document.querySelector('#psw2').value;

    console.log(email, name, psw, psw2)
}