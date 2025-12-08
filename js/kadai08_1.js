// 取得するのがid属性だけ
// id以外もあるなら
/*
const targets = [
    { key: 'user_name',     selector: '#user_name' },
    { key: 'author_name',   selector: '.author_name' },
*/
const targetIds = [
    'user_name',
    'author_name',
    'product_url',
    'video_url',
    'product_category',
    'description'
];

// idだけでまとめたので
const submitButton = document.querySelector('[type=submit]');

// 保存されている値を取得してセット
targetIds.forEach(id => {
    const element = document.getElementById(id);
    const savedValue = localStorage.getItem(id);

    if (element && savedValue) {
        element.value = savedValue;
    }
})

// 送信ボタンがクリックされたら保存
submitButton.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();

    targetIds.forEach(id => {
        const element = document.getElementById(id);

        const value = element.value.trim();

        value && localStorage.setItem(id, value);
    });
});