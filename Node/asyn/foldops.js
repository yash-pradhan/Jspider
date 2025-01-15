const fs = require('fs')

// fs.mkdir('Nodejs', (err)=>{
//     console.log('folder created');
//     fs.mkdir('Nodejs/Express', (err)=>{
//         console.log('express folder is created');
//         fs.writeFile('Nodejs/Express/execute.txt', 'nodejs tutorial', (err)=>{
//             if(err) throw err;
//             console.log('file created');
            
//         })
//         if(err) throw err;
//     })
//      if(err) throw err;
    
// })


// fs.unlink('./Nodejs/Express/execute.txt', (err)=>{
    // if(err) throw err;
// })

fs.rmdir('./Nodejs',{recursive: true}, (err)=>{
    if(err) throw err;
})
