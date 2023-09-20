const users = [
    {
       name: 'u1',
       password: 'p1',
       computers: [
        {  
             id: 1,
             mark:'Acer',
             img: 'https://itechstore.com.np/_ipx/f_webp/img/product/d833acc6-2e8f-46d5-a998-0234ff82dfd8/acer-nitro-5-intel-an515-2.png',
             cpu: 'intel core i7', gpu: 'rtx 3060'
            }
       ],
    }
];


if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(users))
}

const allinputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault
    let users = JSON.parse(localStorage.getItem('users'))
    let userAvaiable = users.some(user => user.name == allinputs[0].value && user.password == allinputs[1].value )

    if(userAvaiable){
        location.href = '../main/index.html'
        localStorage.setItem('currentUser', allinputs[0].value)
    } else {
        alert('Такого юзера не существует')
    }
})