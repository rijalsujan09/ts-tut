function addTwo(num:number):number{
    return num +2;
    // return "hello";
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUpUser(name:string, email:string, password:string, isPaid:boolean){

}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {}


let myValue = addTwo(5);
getUpper("sujan");

signUpUser("sujan", "rijalsujan09", "pass", true);
loginUser("sujan", "test@test.io")


function getValue(myval:number):(boolean|string){
    if(myValue > 5){
        return true;
    }
    return "200 OK"
}

const getHello = (s:string):string => {
return "";
}


const heros  = ["thor", "spiderman", "ironman" ];
// const heros  = [1,2,3,4];

heros.map( (hero):string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}

function handlelError(errmsg: string):never{
    throw new Error(errmsg);
}


export{}