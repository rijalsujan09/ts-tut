interface User {
    readonly dbId: number,
    email: string,
    userId:number,
    googleId?:string,

    // startTrial : () => string
    startTrial(): string,
    getCoupon(couponname:string, value:number):number,
}

interface User {
    gitHubToken :string
}

interface Admin extends  User{
role : "admin" | 'ta' | "learner"
}



const newUser : User = {dbId:123,email:"s@s.io", userId:123,

startTrial: ()=>{
    return "trial started.."
},
gitHubToken : "xxx-yyy-zzz",

getCoupon: (name:"sujan", value:10) => {
return 123;
}
};
