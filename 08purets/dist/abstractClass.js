"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    gerReeltime() {
        // complex calculation
        return 8;
    }
}
class Instagrams extends TakePhoto {
    constructor(cameraMode, filter, value) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.value = value;
    }
    getSepia() {
        console.log(" get sepia");
    }
}
const objSujan = new Instagrams('taken', "filteres", 3);
objSujan.gerReeltime();
// const objSujan = new Instagrams('taken',"filteres");
// class Instagrams extends TakePhoto {
// }
// const objSujan = new Instagrams('taken',"filteres");
