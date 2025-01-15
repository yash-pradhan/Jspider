const fs = require('fs');

let data = fs.readFileSync('./demo.txt', 'utf-8');

// fs.writeFileSync('./demo2.txt', data);

//if file is already present
fs.appendFile(
    './demo2.txt',
    data,
    (err, data) => {
        if (err) {
            console.log('you have  a error');
        }
        console.log(data);
        
    }
)