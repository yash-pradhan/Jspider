// date - 11/nov/2024

function fact10(){
    let y= [];
    for (let x =1;x<=10;x++){
        if ( 10%x ==0){
             y.push(x);
        }
    }
    return y;
}
let y = fact10();

// console.log(y);


function checkPass(userid, password){
    let userId = "admin"
    let Password  = "admin@123"
    if (Password == password && userId == userid ){
        return "login-successful";
        
    }
    else{
        return "login-failed";
        
    }
}

// console.log(checkPass("admin","admin@123"));


function chooseDish(number){
    switch(number){
        case 1:
            return "leamon rice";
            break;
        case 2:
            return "hydrabadi biriyani";
            break;
        case 3:
            return "dal bhat";
            break;
        case 4:
            return "chole bhature";
            break;
       default:
            return "wrong option"
    }
}

// console.log(chooseDish(30));

function avgeven(){
    let count =0;
    let total =0;
    for (let i = 0; i<=10; i++){
        if(i%2==0){
            count++;
            total+=i;
        }

    }
    return total/count;
}

// console.log(avgeven());

