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
    
    // 複製した行の中から、最初に見つかるtd要素を取得してテキストを設定
    row.querySelector("td:first-child").innerText = commentField.value;

    todoListItemWrap.append(row);

    querySelector([])
  }
});
