const btnReg = document.querySelector('.reg');

btnReg.addEventListener('click', register);

async function register() {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const psw = document.querySelector('#psw').value;
    const psw2 = document.querySelector('#psw2').value;

    console.log(email, name, psw, psw2);
    
    if (psw != psw2) {
        alert("A két jelszó nem egyezik!");
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, name, psw })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            window.location.href = '../html/login.html';
        } else if (data.errors) {
            let errorMessage = '';
            data.errors.forEach(hiba => {
                errorMessage += `${hiba.error}\n`;
            });
            alert(errorMessage);
        } else if (data.error) {
            alert(data.error);
        } else {
            alert('Ismeretlen hiba!');
        }
        
    } catch (error) {
        console.log(error);
        
    }
}