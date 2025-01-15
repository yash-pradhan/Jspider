// file operation using async and await

const { error } = require("console")
const { readFile, writeFile, appendFile, unlink } = require("fs")

// const fs = require('fs').promises

// let readData = async()=>{
//     let data = await fs.readFile('./demo.txt', 'utf-8')
//     console.log(data);
    
// }

// readData();

// let writeData = async() => {
//     await fs.writeFile('./demo1.txt', 'node js tutorial');
    
// }
// writeData();


//read and write file

// let readWriteData = async()=>{
//     await readFile('demo.txt', 'utf-8', (err, data)=>{
//         writeFile('demoCopy.txt', data,(err)=>{
//             if(err) throw err;
//         } )
//         if (err) throw err;
//     })
// }

// readWriteData();

//append 
// let appendData = async()=> {
//     await appendFile('./demo.txt', 'context add using append file', (err)=>
//     {
//         if(err) throw err;
//     })
// }
 
// appendData()


// //rename
// let renameFolder = async()=>{
//     await fs.rename(' ./demo.txt', 'test.txt', (err)=>{
//         if(err){
//             console.error(err);
            
//         }
//     })
// }

//delete
let deleteData= async()=>{
    await unlink('./text.txt', (err)=>{
        if(err) throw err;
    })
    console.log('deleted file');
    
}
deleteData();