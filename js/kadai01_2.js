const days = ["月", "火", "水", "木", "金"];
const periods = [
    ["変身術", "数占い"],
    ["魔法生物飼育学", "魔法薬学", "天文学"],
    ["魔法史" ,"薬草学"],
    ["闇の魔術に対する防衛術", "占い学"],
    ["古代ルーン語", "薬草学"],
];

console.log("===== 魔法学校 授業時間割 =====");

for (let day = 0; day < days.length; day++) {
    
    for (let period = 1; period <= periods[day].length; period++) {
        let line = `[${days[day]}曜 ${period}限]：${periods[day][period - 1]}`;
        console.log(line);
    }
}