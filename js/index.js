const btnLogin = document.querySelector('.login');
const btnReg = document.querySelector('.reg');

//console.log(btnLogin, btnReg);

btnLogin.addEventListener('click', ()=> {
    window.location.href = '../html/login.html';
});

btnReg.addEventListener('click', () => {
    window.location.href = '../html/registration.html';
});