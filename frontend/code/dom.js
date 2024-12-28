let heading = document.createElement('h1');
console.log(heading);
heading.innerText = "hello world!";


let article = document.createElement('article');
article.id = 'a1'
console.log(article);

document.getElementById('a1')

article.append(heading);
