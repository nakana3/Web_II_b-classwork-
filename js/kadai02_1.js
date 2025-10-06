function getUsjArea(name, attribute) {
    let area;
    if (attribute === "冒険好き") {
        area = "ジュラシック・パーク";
    } else if (attribute === "魔法が好き") {
        area = "ウィザーディング・ワールド・オブ・ハリー・ポッター";
    } else if (attribute === "スリルが好き") {
        area = "ハリウッド・エリア";
    } else if (attribute === "黄色が好き") {
        area = "ミニオン・パーク";
    } else {
        area = "ニューヨーク・エリア";
    }

    return `こんにちは、${name}さん。おすすめのエリアは「${area}」です！`;
}

console.log(getUsjArea("田中", "魔法が好き"));
console.log(getUsjArea("佐藤", "スリルが好き"));
console.log(getUsjArea("山田", "ホラーが好き"));