// import './App.css';
// let users = [];
// (async ()=>{

//   const data = await fetch('https://jsonplaceholder.typicode.com/users')
//    users= await data.json();
//   console.log(users);
// }

// )();

// async function App() {


  
  
//   return (
//    <>
//     <h1>{users}</h1>
//    {users.map((user)=>{
//       return(<h1>{user.name}</h1>)
//     })}
//    </>
//   );
// }

// export default App;


import './App.css';

let users = []; 

// (async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   users = await response.json();
// })();

// console.log(users);


function App() {
  return (
    <>
      <h1>User List</h1>
      <ul>
        { (
          users.map(user => <li key={user.id}>{user.name}</li>)
        ) 
        }
      </ul>
    </>
  );
}

export default App;

