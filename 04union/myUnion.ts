let score : number | string = 33;

score = 44;
score = "55";


type User = {
    name:string,
    id:number,
}

type Admin = {
    username:string,
    id:number,
}


let hitesh : User|Admin = {
    username:"sujan", id:25285
}


function getDbId(id:number|string){
    // making some api calls
    console.log(`DB id is: ${id}`);
    
}

getDbId(3);
getDbId('3');

function getDbIdAgain(id:number|string){
if(typeof id === 'string'){
    id.toLowerCase
}else{
   id= id+2;
}
    
    console.log(`DB id is: ${id}`);
    
}

// array

const data : number[] = [1,2,3,4]
const data1 : string[] = ["1","2","3","4"]
// const data3 : string[] | number[] = ["1", 2, "3", 4]
const data4 : (string | number)[] = ["1", 2, "3", 4]


let  seatAllotment : "aisle" | "midle" | "window" ;


seatAllotment = "aisle";
// seatAllotment = "crew";