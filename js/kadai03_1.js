const title = document.getElementById("title");
const message = document.getElementById("message");
const showBtn = document.getElementById("showBtn");
const modalBtn = document.getElementById("modalBtn");
const infoDialog = document.getElementById("infoDialog");
const closeBtn = document.getElementById("closeBtn");
const dialogContent = document.getElementById("dialogContent");

showBtn.onclick = function() {
    console.log("===== console.log の場合 =====");
    console.log(title);
    console.log(message);

    console.log("===== console.dir の場合 =====");
    console.dir(title);
    console.dir(message);

    // logでもdirでも変わりない
    console.log(title.textContent);
    console.dir(message.textContent);
}

modalBtn.onclick = function() {
    infoDialog.showModal();
}

closeBtn.onclick = function() {
    infoDialog.close();
}

// ブラウザからクリック箇所の引数を取得する
infoDialog.onclick = function(event) {
    if (event.target === infoDialog) {
        infoDialog.close();
    }
}
