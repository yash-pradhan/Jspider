setTimeout(()=>{console.log('time out 0');
    setTimeout(()=>{
        console.log('inside set time out 1');
        
    },0)
},0)
setTimeout(()=>{console.log('time out 1');
    setTimeout(()=>{
        console.log('inside set time out 2');
        
    },0)
},0)
setTimeout(()=>{console.log('time out 2');
},0)

process.nextTick(()=>{
  
    console.log('nextTick inside 1');
    process.nextTick(()=>{
        console.log('next tick inside 2');
        process.nextTick(()=>{
            console.log('next tick inside 3');
            
        })
    })
    
})

console.log('start');
setTimeout(()=>{console.log('time out 4');
}, 1000);
console.log('node js');
setImmediate(()=>{
    console.log('set immediate')
    setImmediate(()=>{
        console.log('set immediate inside 1')
    })
})

Promise.resolve('promise resolvoe').then(console.log);

process.nextTick(()=>{console.log('next tick out sie 1')})
setTimeout(console.log,1500, 'time out 5'
)
console.log('end');

queueMicrotask(()=>console.log('qeure micro task outside')
)
const { log, error } = require('console');
let fs =  require('fs')

fs = fs.readFile('./app.txt', 'utf-8', (err,data)=>{
    console.log(data);
    
})

Promise.reject('promise rejected').catch(console.log
)
process.nextTick(console.log, 'next tick outsie 2', 
)

fetch('https://jsonplaceholder.typicode.com/users').then(data =>{
    
    console.log('i m fetched')
}).catch(console.log(error)
)