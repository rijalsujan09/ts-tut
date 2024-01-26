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

type User = {
    name : string,
    email: string,
    isActive: boolean,
}

function createUser (user : User):User{
    return {name:'sujan', email:"", isActive:true};
}

createUser({name:'sujan', email:"", isActive:true})

export{}