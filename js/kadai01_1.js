const maxFloor = 10;
let reception = "：総合カウンター";
let conferenceA = "　会議室A";
let conferenceB = "　会議室B";
let AED = "　AED設置階";

class AEDFloor(num) {
    if (num === 1) {
        return true;
    }
}

console.log("=====ECCビルディング フロアマップ=====");

// 1階から10階まで表示する
for (let floor = 1; floor <= maxFloor; floor++) {
    let line = `[${floor}階]`;

    if (floor === 1) {
        line += reception;
    }

    if (floor % 2 === 0 && floor % 3 !== 0) {
        line += conferenceA;
    } else if (floor % 3 === 0 && floor % 2 !== 0) {
        line += conferenceB;
    }

    if ()

    console.log(line);
}