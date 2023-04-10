// console.log("Noyon");
// console.dir(typeof(document));
// console.log(document.title)
// console.log(document.URL)
// console.log(document.head)
// document.title='NEW DOM'
// console.log(document.all)
// for(let element of document.all){
//     console.log(document)
// }

//Get Element By Id
console.log(document.getElementById('new-task'))

let headerElement=(document.getElementById('header'))
headerElement.textContent='TO-DO-Apps'
headerElement.innerText='TO-DO-App'
headerElement.style.color='green'
headerElement.style.fontSize='50px'

//Get Element By Class
let item= document.getElementById('items')
let items=(item.getElementsByClassName('item'));
for(i=0; i<items.length; i++){
    items[i].style.color='red'
}

//Get Element By Tag Name
let itemTag = document.getElementsByTagName('img')
console.log(itemTag)

//Query Selector
let header = document.querySelector('.header');
console.log(header)

let newTask = document.querySelector('#new-task')
console.log(newTask)

let lastItem = document.querySelectorAll('.item:last-child')
console.log(lastItem)
for( let element of lastItem){
    element.style.color = 'lime'
}

let nthItem = document.querySelector('.item:nth-child(2)')
nthItem.style.color='yellow'