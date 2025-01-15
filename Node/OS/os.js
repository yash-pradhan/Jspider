//write all the methods of os module and there uses in comments
//its a built in module
//os module provides a number of operating system-related utility methods.
// It can be accessed using:
// const os = require('os');


const os = require('os');

// console.log(os);
console.log(os.arch());
console.log(os.type());
console.log(os.platform());
console.log(os.hostname());
console.log(os.release());
console.log(os.uptime());
console.log(os.totalmem()
/1024/1024/1024); //convert totalmem in gb formate
//convert freemem in gb formate

console.log(os.freemem()
/1024/1024/1024);

console.log(os.cpus());
// console.log(os.networkInterfaces());
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.tmpdir());
