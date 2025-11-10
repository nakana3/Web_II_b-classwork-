const form = document.getElementById('feedbackForm');
const resultDiv = document.getElementById('result');
const userName = document.getElementById('userName');
const userComment = document.getElementById('userComment');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信を防止

    // idがresultのp要素に格納させてHTMLで表示
    resultDiv.innerHTML = `Thank you, ${userName.value}, for your comment: "${userComment.value}"`;

    // フォームのリセット
    form.reset();
});
