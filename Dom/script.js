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