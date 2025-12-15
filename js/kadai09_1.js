// element
// クラス名が 'todo' の要素を取得
const todoListWrap = document.querySelector(".todo");

// ↑で取得した todoListWrap の中から、'tbody' 要素を取得
const todoListItemWrap = todoListWrap.querySelector("tbody");

// type属性が 'submit' の要素を取得
// button 追加ボタン
const addBtn = document.querySelector("[type=submit]");

// name属性が 'comment' の要素を取得
const commentField = document.querySelector("[name=comment]");

function createElement() {
    const tr = document.createElement("tr");
    const tdComment = document.createElement("td");
    tdComment.className = "comment";
    const tdControl = document.createElement("td");
    tdControl.className = "control";
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "削除";

    // html要素
    tr.appendChild(tdComment);
    tr.appendChild(tdControl);
    tdControl.appendChild(removeBtn);

    return tr;
}

// click: ボタンを押したときに作動するイベント
addBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();

  const todoListItemTemplate = createElement();
  if (commentField.value) {
    // テンプレートを複製
    const row = todoListItemTemplate.cloneNode(true);
    
    // 複製した行の中から、最初に見つかるtd要素を取得して、先頭/末尾の空白を除いたテキストを設定
    row.querySelector("td:first-child").innerText = commentField.value.trim();

    todoListItemWrap.append(row);

    // 追加後に入力欄をクリアしてフォーカスを戻す
    commentField.value = "";
    commentField.focus();
  }
});

/***************************************
 * 課題７で新たに追加となる部分（削除処理）
************************************** */

// ▼▼削除ボタン押下時のイベント処理 ここから▼▼===============

// イベントターゲットのclassListがremoveと一致するとき
todoListItemWrap.addEventListener("click", (event) => {
  const target = event.target;

  
  if (target.classList.contains("remove")) {

    // ターゲットから直近の祖先のtrを取得
    const row = target.closest("tr");

    // 取得したtrをremove
    row.remove();
  }
});
  
  
  

  
// TODO:▲▲削除ボタン押下時のイベント処理 ここまで▲▲==============
