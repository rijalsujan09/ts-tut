abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter :string
    ){}

    abstract getSepia():void;

    gerReeltime():number{
        // complex calculation
        return 8;
    }
}


class Instagrams extends TakePhoto{

  

    constructor(public cameraMode:string,public filter:string, public value:3){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log(" get sepia");
        
    }
}

const objSujan = new Instagrams('taken',"filteres", 3);

objSujan.gerReeltime()

// const objSujan = new Instagrams('taken',"filteres");


// class Instagrams extends TakePhoto {
// }
// const objSujan = new Instagrams('taken',"filteres");