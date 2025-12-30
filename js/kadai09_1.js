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

const STORAGE_KEY = 'todoItems';

/**
 * テーブルの行を作成する関数
 * @param {string} text - Todoのテキスト
 * @returns {HTMLTableRowElement} tr要素
 */
function createElement(text) {
    const tr = document.createElement("tr");


    const tdComment = document.createElement("td");
    tdComment.className = "comment";
    if(text) {
      tdComment.innerText = text;
    }

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

function saveTodoItems() {
  const list = [];
  // 現在表示されている行のコメント全てを取得
  const rows = todoListItemWrap.querySelectorAll("tr td.comment");

  // 取得したコメントを配列に格納
  rows.forEach(td => {
    list.push(td.innerText);
  });

  // JSON形式で保存
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
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
    // 記述法: save[関数名]();
    saveTodoItems();

    // 追加後に入力欄をクリアしてフォーカスを戻す
    commentField.value = "";
    commentField.focus();
  }
});

// イベントターゲットのclassListがremoveと一致するとき
todoListItemWrap.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("remove")) {

    // ターゲットから直近の祖先のtrを取得
    const row = target.closest("tr");
    row.remove();
    // 記述法: save[関数名]();
    saveTodoItems();
  }
});
  
// リロード時に保存されたTODOリストを復元
window.addEventListener('DOMContentLoaded', () => {
  // ローカルストレージからデータを取得
  const jsonString = localStorage.getItem(STORAGE_KEY);

  // データが在る場合のみ
  if (jsonString) {
    // JSON文字列に戻す
    const todoItems = JSON.parse(jsonString);

    // 中身を順番に取り出して表示
    todoItems.forEach((item) => {
      const row = createElement(item);
      todoListItemWrap.append(row);
    });
  }
})
