const reviews = [
    { stars: 5, text: "マルゲリータが最高に美味しかったです！また来ます！", name: "（30代・男性）" },
    { stars: 4, text: "雰囲気もサービスも良かった。", name: "（20代・女性）" },
    { stars: 5, text: "家族みんな大満足です。また行きたいです。", name: "（40代・主婦）" },
];

// 出力先の取得
const voiceFor = document.getElementById("voiceFor");
const voiceForOf = document.getElementById("voiceForOf");
const voiceForEach = document.getElementById("voiceForEach");

// Form関連の取得
const reviewForm = document.getElementById("reviewForm");
const inUserName = document.getElementById("userName");
const inStarRating = document.getElementById("starRating");
const inUserComment = document.getElementById("userComment");

function createReviewElement(review) {
    const div = document.createElement("div");
    div.className = "voice";

    const star = document.createElement("h4");
    const MAX_STARS = 5;
    const blackStar = "✦".repeat(review.stars);
    const whiteStar = "✧".repeat(MAX_STARS - review.stars);
    star.textContent = blackStar + whiteStar;

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

function renderReviews() {
    voiceFor.innerHTML = "";
    voiceForOf.innerHTML = "";
    voiceForEach.innerHTML = "";
    
    for(let rev of reviews) {
        const el = createReviewElement(rev)

        // cloneNodeで複製してから各出力先に追加
        voiceFor.appendChild(el.cloneNode(true));
        voiceForOf.appendChild(el.cloneNode(true));
        voiceForEach.appendChild(el);   // 最後は複製不要！
    }
}

// イベントリスナーの設定
reviewForm.addEventListener(
    "submit", function(event) {
        event.preventDefault();  // デフォルトの送信動作をキャンセル

        // 数値は文字で送られるので数値に変換
        const newReview = {
            stars: parseInt(starRating.value, 10),
            text: userComment.value,
            name: userName.value,
        };
        // .textContent = <p>の中身
        // .value = <input>や<textarea>の中身

        // reviews配列の最初に追加
        reviews.unshift(newReview);

        renderReviews();

        // フォームのリセット
        reviewForm.reset();
    }
);

renderReviews();
