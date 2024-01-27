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

    // private _courseCount = 1;
    protected _courseCount = 1;


   private city: string = "Chitwan";
    constructor(
        public email:string, 
        public name:string,
        // private userId : string
        ){}

        private deleteToken(){
            console.log("token  deleted..")
        }

        get getAppleEmail():string {
            return `apple${this.email}`
        }

        get getCourseCount():number{
            return this._courseCount;
        }

        set setCourseCount(v:number){
            if (v <=1 ){
                throw new Error(' Course count should be more than 1..')
            }
            this._courseCount = v;
        }
}


class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount(){
        this._courseCount = 4;
    }
}

const sujan  = new User("rijal@test.io", "sujan Rijal")

console.log(sujan)