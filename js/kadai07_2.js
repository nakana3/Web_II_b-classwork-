// TODO:DOM 要素の取得
// （ヒント：#openItemDialog、#itemDialog、form、#addItem、#itemList tbody）
const openItemDialogBtn = document.querySelector("#openItemDialog");
const itemDialog = document.querySelector("#itemDialog");
const itemForm = itemDialog.querySelector("form");
const addItemBtn = itemDialog.querySelector("#addItem");
const itemList = document.querySelector("#itemList tbody");


// TODO:商品追加ボタンクリック時の処理
openItemDialogBtn.addEventListener("click", () => {
    // TODO: 入力ダイアログを表示する
    itemDialog.showModal();
});


// TODO:入力ダイアログクリック時の処理
itemDialog.addEventListener("click", (event) => {

    // TODO:イベントターゲットの値がitemDialog または tagName が SPAN のとき
    // 拡張性を考えてDialog のspan 要素だけを指定
    const closeBtn = itemDialog.querySelector("span");
    if (event.target === itemDialog || event.target === closeBtn) {

        // TODO: 入力ダイアログを閉じる
        itemDialog.close();
    }
});


// TODO:確定ボタン押下時の処理
addItemBtn.addEventListener("click", (event) => {

    // TODO:デフォルトの送信動作をキャンセル
    event.preventDefault();

    // TODO:ダイアログ内のDOM要素の値を取得
    const itemID = itemForm.querySelector("[name=itemId]").value.trim();
    const itemName = itemForm.querySelector("[name=itemName]").value.trim();
    const itemDes = itemForm.querySelector("[name=itemDescription]").value.trim();
    const itemPrice = itemForm.querySelector("[name=itemPrice]").value.trim();

    // DOM要素の値がすべて存在する場合の変数
    const isNotEmpty = itemID && itemName && itemDes && itemPrice;

    // TODO:すべての値が入力されている場合
    if (isNotEmpty) {

        // TODO:itemList に入力内容を１行分として追加する
        // ここでは insertAdjacentHTML メソッドを使用、beforeend で末尾追加を指定
        // XSS の脆弱性あり！
        itemList.insertAdjacentHTML("beforeend", 
            `<tr>
                <td>${itemID}</td>
                <td>${itemName}</td>
                <td>${itemDes}</td>
                <td>¥${itemPrice}</td>
                <td><button class="remove">削除</button></td>
            </tr>`
        );

        // TODO:フォーム内容リセット
        itemForm.reset();

        // TODO:ダイアログを閉じる
        itemDialog.close();
    }
});




/******************************************
 * 課題7-1と同様の処理
 * ****************************************/

// イベントターゲットのclassListがremoveと一致するとき
itemList.addEventListener("click", (event) => {
  const target = event.target;
  
  if (target.classList.contains("remove")) {

    // ターゲットから直近の祖先のtrを取得
    const row = target.closest("tr");

    // 取得したtrをremove
    row.remove();
  }
});
 