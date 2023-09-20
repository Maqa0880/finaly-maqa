const tbody = document.querySelector('tbody');
const currentUser = localStorage.getItem('currentUser');
const users = JSON.parse(localStorage.getItem('users'));
const addBtn = document.querySelector('#addBtn')
const table = document.querySelector('table')

let MyComp = users.find((user) => user.name === currentUser).computers;
let change = false

function uptadeTable(){
    tbody.innerHTML = ''

    for(let computer of MyComp) {
        tbody.innerHTML += `<tr>
                               <td>${computer.id}</td>
                               <td>${computer.mark}</td>
                               <td>
                                   <img src=${computer.img} alt="">
                               </td>
                               <td>
                                   <button id='${computer.id}d' class="btn btn-danger">Delete</button>
                                   <button class="btn btn-primary">Change</button>
                               </td>
                            </tr>`
    }
}

uptadeTable()

const allInputs = document.querySelectorAll('input') 

function addComputer(){
    if(!change){
        const newComputer = {
            id : MyComp.lenght === 0 ? 1 : MyComp.at(-1).id + 1,
            Mark: allInputs[0].value,
            ram: allInputs[1].value,
            gpu: allInputs[2].value,
            img: allInputs[3].value,
            cpu: allInputs[4].value,
            rom: allInputs[5].value,
            os: allInputs[6].value,
            new: allInputs[7].value
        }

        MyComp.push(newComputer)
        for(let input of allInputs){
            input.value = ''
        }
        for(let user of users){
            if(user.name == currentUser){
                user.computers = MyComp
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        uptadeTable()
    }
}

function deleteComputer(id){
    MyComp = MyComp.filter((comp) => comp.id !== id )

    for(let user of users){
        if(user.name == currentUser){
            user.computers = MyComp
        }
    }
    localStorage.setItem('users', JSON.stringify(users))
    uptadeTable()
}

table.addEventListener('click', (e) => {
    if(e.target.innerHTML === 'Delete'){
        deleteComputer(parseint(e.target.id))
    } else if (e.target.innerHTML === 'Change'){
        
    }
})

addBtn.addEventListener('click', addComputer)

