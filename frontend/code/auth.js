


function login(){

    let password = document.querySelector('#pass').value
    let username = document.querySelector('#userid').value
    if(username == 'abcd' &&  password == '1234')
    {
        alert('login success');
    }
    else{
        document.getElementsByTagName('body').style.backgroundColor('black');
        alert('login failed');
    }
}