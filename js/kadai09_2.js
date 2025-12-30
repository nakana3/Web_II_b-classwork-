// DOM 要素の取得
const openItemDialogBtn = document.querySelector("#openItemDialog");
const itemDialog = document.querySelector("#itemDialog");
const itemForm = itemDialog.querySelector("form");
const addItemBtn = itemDialog.querySelector("#addItem");
const itemList = document.querySelector("#itemList tbody");

// 衝突しないようなキー名を設定
const STORAGE_KEY = 'pizzaData';

// 商品追加ボタンクリック時の処理
openItemDialogBtn.addEventListener("click", () => {
    itemDialog.showModal();
});


// 入力ダイアログクリック時の処理
itemDialog.addEventListener("click", (event) => {
    const closeBtn = itemDialog.querySelector("span");
    if (event.target === itemDialog || event.target === closeBtn) {
        itemDialog.close();
    }
});


function saveItems() {
  const list = [];
  // 現在表示されている行のコメント全てを取得
  const rows = itemList.querySelectorAll("tr");

  // 取得したコメントを配列に格納
  rows.forEach(row => {
    const cells = row.querySelectorAll("td");

    if (cells.length > 0) {
        const item = {
            id: cells[0].innerText,
            name: cells[1].innerText,
            desc: cells[2].innerText,
            price: cells[3].innerText.replace('¥', '')
        }
        list.push(item);
    }
  });

  // JSON形式で保存
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}


// 確定ボタン押下時の処理
addItemBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const itemID = itemForm.querySelector("[name=itemId]").value.trim();
    const itemName = itemForm.querySelector("[name=itemName]").value.trim();
    const itemDes = itemForm.querySelector("[name=itemDescription]").value.trim();
    const itemPrice = itemForm.querySelector("[name=itemPrice]").value.trim();

    const isNotEmpty = itemID && itemName && itemDes && itemPrice;

    if (isNotEmpty) {
        addItemToTable(itemID, itemName, itemDes, itemPrice);

        itemForm.reset();
        itemDialog.close();

        saveItems();
    }
});

function addItemToTable(id, name, desc, price) {
    // ! XSS の脆弱性あり！
    itemList.insertAdjacentHTML("beforeend", 
        `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${desc}</td>
            <td>¥${price}</td>
            <td><button class="remove">削除</button></td>
        </tr>`
    );
}

// 削除処理
itemList.addEventListener("click", (event) => {
  const target = event.target;
  
  if (target.classList.contains("remove")) {
    const row = target.closest("tr");
    row.remove();
    saveItems();
  }
});

// リロード時に保存されたTODOリストを復元
window.addEventListener("DOMContentLoaded", () => {
  const jsonString = localStorage.getItem(STORAGE_KEY);

    if (jsonString) {
        const items = JSON.parse(jsonString);

        items.forEach(item => {
            addItemToTable(item.id, item.name, item.desc, item.price);
        })
    }
});