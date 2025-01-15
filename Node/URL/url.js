//URL (uniform resource locator)
//its a built in module in node.js
//it is used to parse the url string and provide the components of the url
//url.parse() method is used to parse the url string

const url = require('url');

// let urlStr = 'https://www.google.com/search?q=node.js';

// The second argument 'true' in url.parse() method ensures that the query string is parsed into an object
// let urlObj = url.parse(urlStr, true);

// Alternative method using the WHATWG URL API
// let alternativeUrlObj = new URL(urlStr);
// console.log(alternativeUrlObj);


// console.log(alternativeUrlObj);
// console.log(alternativeUrlObj.protocol);
// console.log(alternativeUrlObj.host);
// console.log(alternativeUrlObj.hostname);
// console.log(alternativeUrlObj.search);
// // console.log(alternativeUrlObj.query.q);
// console.log(alternativeUrlObj.pathname);
// console.log(alternativeUrlObj.path);
// console.log(alternativeUrlObj.href);
// console.log(alternativeUrlObj.port);
// console.log(alternativeUrlObj.auth);
// console.log(alternativeUrlObj.hash);

//sugest a url where the port no. is visible
let urlStr = 'https://www.google.com:8080/search?q=node.js';
let urlObj = url.parse(urlStr, true);
console.log(urlObj);
console.log(urlObj.port);