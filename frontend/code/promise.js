// let flag = false;

// let data =  new Promise((res, rej)=>{

//  if(flag){
//     console.log("this response is accepted");
//     console.log(res);
    
    
//  }
//  else{
//     console.log("invalid respose")
//     console.log(rej);
    
//  }
// })

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    console.log(res);
    res.json()
    .then((data)=>{
        console.log(data);
        
    })
    .catch((inv)=>{
        console.log(inv);
        
    })
    
})
.catch((err)=>
{
    console.log(err);
    
})
    
