"use strict";
// console.log('type scrip is here again');
// class User {
//     email:string;
//     name:string;
//    private city: string = "Chitwan";
//     constructor(email:string, name:string){
//         this.email =email;
//         this.name = name;
//     }
// }
// const sujan  = new User("rijal@test.io", "sujan Rijal")
// console.log(sujan)
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Chitwan";
    }
    deleteToken() {
        console.log("token  deleted..");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(v) {
        if (v <= 1) {
            throw new Error(' Course count should be more than 1..');
        }
        this._courseCount = v;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const sujan = new User("rijal@test.io", "sujan Rijal");
console.log(sujan);
