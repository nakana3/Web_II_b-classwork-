const btn = document.getElementById('setBtn');

btn.addEventListener("click", function() {
    console.log('認識しました');
});

function myHandle(event) {
    console.log('ボタンが押されました');
    console.log(event);
    console.log(event.target);
}