const reviews = [
    { stars: 5, text: "マルゲリータが最高に美味しかったです！また来ます！", name: "（30代・男性）" },
    { stars: 4, text: "雰囲気もサービスも良かった。", name: "（20代・女性）" },
    { stars: 5, text: "家族みんな大満足です。また行きたいです。", name: "（40代・主婦）" },
];

// 出力先の取得
const voiceFor = document.getElementById("voiceFor");
const voiceForOf = document.getElementById("voiceForOf");
const voiceForEach = document.getElementById("voiceForEach");

function createReviewElement(review) {
    const div = document.createElement("div");
    div.className = "voice";

    const star = document.createElement("h4");
    star.textContent = "🍕".repeat(review.stars);

    const comment = document.createElement("p");
    comment.textContent = review.text;

    const name = document.createElement("p");
    name.className = "name";
    name.textContent = review.name;

    // 要素の格納
    div.appendChild(star);
    div.appendChild(comment);
    div.appendChild(name);

    voiceFor.appendChild(div);

    return div;
}

for (let i = 0; i < reviews.length; i++) {
    voiceFor.appendChild(createReviewElement(reviews[i]));
}

for(let rev of reviews) {
    voiceForOf.appendChild(createReviewElement(rev));
}

reviews.forEach(rev => {
    voiceForEach.appendChild(createReviewElement(rev));
});

console.log("~~~ review[0]の中身(for-in) ~~~");
for (const key in reviews[0]) {
    console.log(key);
}
