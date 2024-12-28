// let datafetch = fetch('https://jsonplaceholder.typicode.com/users');

//  datafetch.then((data)=>{
//     // console.log(data);
//     data.json()
//     .then((data)=>{
//         console.log(data);
//     }).catch((err)=> {
//         console.log(err);
        
//     })
    
// }).catch((error)=>{
//     console.error(error);
    
// })


//async and await

async function fetchd(){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let dataori= await data.json()
    console.log(dataori);
}

fetchd();