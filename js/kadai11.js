// querySelectorの方が一般的
const content = document.querySelector('#content');
const searchDialog = document.querySelector('#searchDialog');

// 世界遺産全体を囲う div要素生成、クラス名付与
const heritage = document.createElement('div');
heritage.classList.add('heritage');

// APIから非同期でデータを取得するメソッド
const getHeritageList = async () => {
    const response = await fetch('https://click.ecc.ac.jp/ecc/scholarly_ys/ysakae/webfront2/getHeritageList.php');

    // https://zenn.dev/azukiazusa/articles/difference-between-return-and-return-await
    // return await を使うとfunctionの中で catch する
    return await response.json();
}


const searchHeritageList = async (name, country) => {
    // URLSearchParams: 不適切な文字列をエンコードしてくれて(&, ? の除去)、URLのクエリ文字列を生成してくれる
    const params = new URLSearchParams({name: name, country: country});

    const response = await fetch(`https://click.ecc.ac.jp/ecc/scholarly_ys/ysakae/webfront2/searchHeritageList.php?${params}`);

    return await response.json();
}

// APIから所得したデータを元にDOM生成するメソッド
const createHeritageItemList = (data) => {
    // 1.
    const div = document.createElement('div');
    div.id = data.id;
    div.classList.add('item');

    // 2.
    const img = document.createElement('img');
    img.src = `./img/${data.id}.webp`;

    // 3.
    const description = document.createElement('div');
    description.classList.add('description');

    // 4.
    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = data.name;

    // 5.
    const country = document.createElement('span');
    country.classList.add('country');
    country.textContent = data.country;

    // 3. に 4. と 5. を追加
    description.append(name, country);

    // 1. に 2. と 3. を追加
    div.append(img, description);

    // heritage に 1. を追加
    heritage.append(div);    
    
    /* innerHTMLでの記述 --XSS脆弱性の観点から非推奨--
    const id = data.id;

    heritage.innerHTML(
        "beforeend",
        `
        1.
        <div id=${id} class='item'>
            2.
            <img src='../img/${id}.webp'>
            3.
            <div class='description'>
                4.
                <span class='name'>
                    ${data.name}
                </span>
                5.
                <span class='country'>
                    ${data.country}
                </span>
            </div>
        </div>
        `
    );
    */
};

// 非同期処理実行
getHeritageList().then((res) => {
    res.forEach(data => {
        createHeritageItemList(data);
    }) 

    content.appendChild(heritage);
});

// 検索ボタン押下時の処理
document.querySelector('#searchBtn').addEventListener('click', () => {
    searchDialog.showModal();
})

// ダイアログを閉じる処理
searchDialog.addEventListener('click', () => {
    if (!event.target.closest('.dialog-wrap') || event.target.tagName === 'I') {
        searchDialog.close();
    }
});

// 検索文字列をAPIに渡す処理
searchDialog.querySelector("[type=submit]").addEventListener('click', (event) => {
    event.preventDefault();

    const name = searchDialog.querySelector("[name=name]").value;
    const country = searchDialog.querySelector("[name=country]").value;

    searchHeritageList(name, country).then((res) => {
        // 全件取得したデータをクリア
        while (heritage.firstChild) {
            heritage.removeChild(heritage.firstChild);
        }

        res.forEach(data => {
            createHeritageItemList(data);
        })
    })
})
