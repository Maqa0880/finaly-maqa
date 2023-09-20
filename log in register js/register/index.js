const allinputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

const users = JSON.parse(localStorage.getItem('users'))

btn.addEventListener("click", (e) => {
    if(allinputs[1].checkValidity()){
        e.preventDefault();
        let newUser = {
            name: allinputs[0].value,
            phone: allinputs[1].value,
            password: allinputs[2].value
        };

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users))

        location.href = '../Log_in/index.html'
    } else {
        alert('Phone number is wrong')
    }
})