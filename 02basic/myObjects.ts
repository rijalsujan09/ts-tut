// const User = {
//     name : 'sujan',
//     email: 'rijalsujan09@gmail.com',
//     isActive :true,
// }

// function createUser({name:string, isPaid:boolean}){}

// let newUser = {name:'sujan', isPaid:false, email:'rijalsujan09@gmail.com'};

// createUser(newUser)




// function createCourse():{name:string, price:number}{
//     return {name:"reacjs", price: 399};
// }

// type User = {
//     name : string,
//     email: string,
//     isActive: boolean,
// }

// function createUser (user : User):User{
//     return {name:'sujan', email:"", isActive:true}
// }

// createUser({name:'sujan', email:"", isActive:true})


type User = {
    readonly _id: string,
    name : string,
    email: string,
    isActive: boolean,
    creditCard?:number,
}


type cardNumber = {
    cardnumber:string
}
type cardDate = {
    cardDate: string
}


type cardDetails = cardNumber & cardDate & {
    cvv :number
}

let myUser : User = {_id:'12345', name:'h', email:'h@h', isActive:false};

myUser.email= 'rijalsujan09@gmail.com';
// myUser._id = "124587";


export{}