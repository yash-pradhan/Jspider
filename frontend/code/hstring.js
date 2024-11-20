let str = "Jspider"
console.log(str.length) // gives the length of the array
console.log(str[0]) // gives the character present in the index position

let a = str.charAt(2) 
console.log(a);

let b = str.replace('J', 'Q');
console.log(b);

let c = str.toLowerCase()
console.log(c);

let d = str.toUpperCase()
console.log(d);

str = "Js pi der"
let e = str.slice(1, 4)
console.log(e);

let f = str.indexOf('p')
console.log(f);

let g = str.lastIndexOf('p')
console.log(g);

let h = str.split(' ')
console.log(h);


str = "Js psi dser"
let i = str.replace('s', '*')
console.log(i);

str = "Js psi dser"
let j = str.replaceAll('s', '$')
console.log(j);