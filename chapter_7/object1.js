let point = {
    x : 10,
    y : 20
}
//console.log(point.x + point.y)
//object array notation
//console.log(point['x']);
//console.log(point['y']);

point.e = 'New'
point.f = 'Learning'
point['g'] = 'Array Notation'

let prop = 'h';
point[prop] = 'Array Notation another way'
console.log(point[prop])

point.i = undefined;
console.log(point)
//delete properties in Objects
delete point.i;
console.log(point)