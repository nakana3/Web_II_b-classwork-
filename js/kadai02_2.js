function getShiftJudgement(storeName, staffCount) {
    let message;
    if (staffCount <= 0) {
        message = "エラー：出勤人数を確認してください。";
    } else if (staffCount <= 2) {
        message = "最小人数で営業中。店長！他の店舗からヘルプを呼んでください！";
    } else if (staffCount <= 4) {
        message = "通常通り営業中。ホール、キッチン・ドリンクを分担できます。";
    } else  if (staffCount <= 7) {
        message = "ピークタイム対応可。マルゲリータとクワトロフォルマッジも回せます。";
    } else {
        message = "多すぎです。何もしないバイトが続出中。";
    }

    return `ECC Pizza ${storeName}店\n` + 
    `出勤人数：${staffCount}名\n` + 
    `シフト判断：${message}`;
}

console.log(getShiftJudgement("中崎町本", 3));
console.log(getShiftJudgement("梅田", 1));
console.log(getShiftJudgement("天神橋筋六丁目", 5));
console.log(getShiftJudgement("天満橋", 10));
console.log(getShiftJudgement("天王寺", 0));