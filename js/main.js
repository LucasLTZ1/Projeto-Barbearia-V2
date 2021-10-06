//const pessoa ={
 //   name: 'Lucas',
//    age: 19,
//
//        falar: function(){
//            alert(pessoa.name)
//            alert(pessoa.age)
//        }
//}

//pessoa.falar()

//DOM-Document object model
// Abre e fecha menu//

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
console.log(toggle)
//console log

for (const element of toggle){
    element.addEventListener('click', function(){ 
        //alert('Estamos aqui!')
        nav.classList.toggle('show')
    })
}