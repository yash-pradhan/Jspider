// let flag = true;

// let pro = new Promise((res, rej) =>{ 

//     if(flag){   
//         return res("success");
//     }else{
//         return rej("failed");
//     }
// }
// );





//use of .then and .catch to resolve the promise 

// const prom = new Promise((rej, res)=>{
//     let success = false;
//     setTimeout(() => {
//         if(success){
//             res('promise fullfiled!');
//         }
//         else{
//             rej('promise denied!');
//         }
//     } ,10000)

// });

// prom.then(
//     (result) => console.log(result)
    
// ).catch((error)=>  console.log(error)
// )





//chaining of the promise

// const prom= new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve('filled successfully!'), 1000)
// })

// prom.then((data)=>{
//     console.log(data);
//     return 'processing data'
// }).then((data)=>{
//     console.log(data);
//     return 'data entry';
// }).then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
    
// });







// use of asyn and await

// let fetchdata = () =>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=> {
//           let  scuess = false;
//             if(scuess){

//                 res('data fetched!')
//             }
//             else{
//                 rej('failed to fetch!');
//             }
//         }, 1000)
//     })
// }

// const processedData = async ()=>{
//     try{
//         const data = await fetchdata();
//         console.log(data);
        
//     }catch(err){
//         console.error(err);
        
//     }
// }

// processedData();


// console.error("love of life");
