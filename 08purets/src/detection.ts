function detectTypes(val : number | string ){
if(typeof val === 'string'){
   return  val.toLowerCase();
}  
return val +3;

}


function provideId(id:string| null){
   if(!id){
    console.log("please provide ID");
   } 

   id?.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
}

interface User{
    name : string,
    email:string,
}


interface Admin {
    name:string,
    email:string,
    isAdmin:boolean,
}

function isAdminAccount(account:User | Admin):boolean{
    if("isAdmin" in account){
        return account.isAdmin;
    }
    return false;
}

function logValue(x: Date | string){
    if (x instanceof Date){
        console.log(x.toUTCString);
    }else{
        console.log(x.toString);
    }
}


// type  Fish = {
//     swim:() => void;
// }
// type  Bird = {
//     fly:() => void;
// }

// function isFish(pet:Fish|Bird):boolean{
//     if((pet as Fish).swim !== undefined)
//     return true; 
// }

// function getFood(pet:Fish|Bird){
//     if(isFish(pet)){
//         pet 
//         return "fish food"
//     }else{
//         pet
//         return "bird food"
//     }
// }


interface Circle {
    kind : "circle",
    raduius : number,
}

interface Square {
    kind : "square",
    side : number,
}

interface Rectangle{
    kind : "rectangle",
    length : number,
    width : number
}

type Shape  = Circle | Square | Rectangle



function getTrueShape (shape :Shape){
if(shape.kind === "circle"){
    return Math.PI*shape.raduius **2;
}
if(shape.kind === "rectangle"){
    return shape.width * shape.length;
}
return shape.side * shape.side;
}



function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
        return Math.PI*shape.raduius**2;
        case "square":
        return shape.side * shape.side;
        case "rectangle":
            return shape.length*shape.width;
        default:
            const _defaultforShape : never = shape
            return _defaultforShape;
    }
}
