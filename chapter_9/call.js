// var pokemon = {
//   firstname: 'Pika',
//   lastname: 'Chu ',
//   getPokeName: function() {
//       var fullname = this.firstname + ' ' + this.lastname;
//       return fullname;
//   }
// };

// var pokemonName = function(snack, hobby) {
//   console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
function sayHello(a,b){
  console.log(this)
  console.log("Hello " + this.name+a+b)
}  
var obj={name:"Ali"}
sayHello.call(obj,"how ","are you")
sayHello.call({name:"My"},"name is ","Noyon");
sayHello.apply({name:"I "}, ["am from ", "bangladesh"])