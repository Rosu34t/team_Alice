const btn = document.querySelector('.buttonlooks'); // ボタンのクラスを正しく指定
var badgame = document.getElementById('badplan'); // HTMLのIDがbadplan
let result; // 罰ゲーム内容の変数

function punishment() {
    var rand = Math.floor(Math.random() * 5 + 1);
    
    if (rand == 1) {
        result = "これを";
    } else if (rand == 2) {
        result = "まーじすると";
    } else if (rand == 3) {
        result = "どんなことが";
    } else if (rand == 4) {
        result = "おこるか";
    } else {
        result = "僕でもわかりません";
    }
    badgame.innerText = result;
}

btn.addEventListener('click', punishment);
