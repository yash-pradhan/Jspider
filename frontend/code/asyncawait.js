async function fetchdata (){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    console.log(data);
    
};

fetchdata();