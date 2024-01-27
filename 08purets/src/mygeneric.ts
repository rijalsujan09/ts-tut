const  score: Array<number> = [];

const names:Array<string> = [];

function identityOne(val: boolean|number):(boolean|number){
    return  val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}

identityThree(true)

function identityFour<T>(val:T):T{
    return val;
}


interface Bottle {
    brand:string,
    type:number,
}

function identityFive<Bottle>(val:Bottle):Bottle{
    return val;
}

function getSearchProducts<T>(products:T[]):T{
    // do some database operation 
    const myIndex = 3;
    return products[myIndex];
}


const getMoreSearchProducts = <T,>(product:Array<T>):T =>{
    // some database operation
    return product[2];
}


interface Database{
    connection:string,
    username: string,
    password: string
}


function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object{
    return {
        valOne,
        valTwo,
    };
}


// anotherFunction(3, {})


interface Quiz{
    name:string,
    type: string,

}

interface Cources {
    name:string,
    author:string,
    subject:string,
}


class Sellable<T>{
    public cart : T[] = [];
    addtoCart(product: T){
        this.cart.push(product)
    }
}