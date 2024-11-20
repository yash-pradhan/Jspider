let cart = [
    {
        item: 'car',
        brand : 'mustang',
        price: 2000,

    },
    {
        item : 'phone',
        brand: 'iphone',
        price: 100000
    },
    {
        item : 'perfume',
        brand : 'the main company',
        price : 10000
    }
]

let total = cart.reduce((sum, x)=>
    sum = sum+x.price, 0
)

console.log(total);

let arr = [12, 34, 121, 1, 2, 231, 23]

console.log(arr.sort());

let a1 = arr.sort((a,b)=>{

    // return a-b;
    return b-a;
}
)

console.log(a1);

console.log(typeof cart[1]);



