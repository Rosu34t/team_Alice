import React, { useState, useEffect, useCallback, memo } from "react";

export const Roulette = memo(() => {
  const [range, setRange] = useState("1から10"); // ルーレットの数字の範囲
  const [index, setIndex] = useState(0); // 現在のインデックス
  const [start, setStart] = useState(false); // ルーレットの開始/停止状態
  const [showSpecialMission, setShowSpecialMission] = useState(false); // 特殊ミッションを表示するかどうかの状態
  const [specialMissionContent, setSpecialMissionContent] = useState(""); // 特殊ミッションの内容

  const missions = [
    "駅舎と写真を撮る",
    "なし",
    "岐阜のポーズをして写真を撮る",
    "適当なポーズをして写真を撮る",
    "青春を思い出す",
    "なし",
    "大仏のポーズで写真",
    "なし",
    "駅の中心で愛を叫ぶ......ような格好をする",
    "今の気持ちをSlackに書き込む"
  ];

  // ボタンの文言を変更する処理
  const startRoulette = useCallback(() => {
    setStart(!start); // start ステートを反転させる
  }, [start]);

  // ルーレットの範囲を切り替える処理
  const toggleRange = useCallback(() => {
    setRange((prevRange) => (prevRange === "1から10" ? "10から15" : "1から10"));
    setIndex(0); // インデックスをリセット
  }, []);

  // 特殊ミッションを表示する処理
  const toggleSpecialMission = useCallback(() => {
    setShowSpecialMission(!showSpecialMission); // 特殊ミッションの表示を切り替える
  }, [showSpecialMission]);

  // 特殊ミッションの内容を設定する処理
  const setSpecialMission = useCallback((mission) => {
    setSpecialMissionContent(`特殊ミッション${mission}の内容を設定します`);
  }, []);

  // 特殊ミッションの内容を閉じる処理
  const closeSpecialMission = useCallback(() => {
    setSpecialMissionContent(""); // 特殊ミッションの内容をクリア
  }, []);

  // ルーレットを回す処理
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          // range に応じて次のインデックスを計算
          if (range === "1から10") {
            return (oldIndex + 1) % 10;
          } else {
            return (oldIndex + 1) % 6; // 9を加える代わりに10を加えます
          }
        });
      }, 50); // ルーレットの中身を切り替える速度
      return () => clearInterval(interval); // コンポーネントがアンマウントされるときにインターバルをクリア
    } else {
      return () => clearInterval(); // ルーレットが停止された場合、インターバルをクリア
    }
  }, [start, range]); // start と range の変更時に実行

  return (
    <>
      {/* ルーレットの表示 */}
      <div>
        <p><h1>注意事項</h1></p>
        <p>京都に16時までに着くようにしてください</p>
        <p>15時時点でまだ大阪難波と奈良の間にいる場合は京都まで直接来てください</p>
        <p>15時半時点で京都まで残り15駅以内にいない場合は現在いる駅から直接京都まできてください</p>
        <p>16時を過ぎても京都に来ない場合は先に梅田へ移動するので頑張って追いついてください</p>
        <p>　</p>
        <p><h3>ルーレットを開始</h3></p>
        <p>移動できる駅数は・・・</p>
        {/* 現在のインデックスに基づいて範囲内の数字を表示 */}
        <p>{range === "1から10" ? index + 1 : index + 10}</p>
        <p>ミッションは・・・</p>
        <p>{missions[index]}</p>
      </div>
      {/* ルーレットを開始/停止するボタン */}
      <button type="button" onClick={startRoulette}>
        {start ? "ストップ" : "スタート"}
      </button>
      {/* ルーレットの範囲を切り替えるボタン */}
      <button type="button" onClick={toggleRange}>
        奈良ー京都間に入ったらおしてね
      </button>
      {/* 特殊ミッションの表示切り替えボタン */}
      <button type="button" onClick={toggleSpecialMission}>
        {showSpecialMission ? "特殊ミッションを非表示" : "特殊ミッションを表示"}
      </button>
      {/* 特殊ミッションの表示 */}
      {showSpecialMission && (
        <div>
          <p>特殊ミッション</p>
          {/* 特殊ミッションのボタン */}
          <button type="button" onClick={() => setSpecialMission("美味しそうな食べ物を見つけてSlackに投稿")}>
            石切駅ミッション
          </button>
          <button type="button" onClick={() => setSpecialMission("生駒ケーブルを使って美味しいスイーツを探せ！見つけたらSlackに投稿")}>
            生駒駅ミッション
          </button>
          <button type="button" onClick={() => setSpecialMission("展望台から電車の写真を撮る")}>
            大和西大寺駅ミッション
          </button>
          <button type="button" onClick={() => setSpecialMission("鹿さんとツーショット！")}>
            奈良駅ミッション
          </button>
          {/* 他の特殊ミッションのボタンを追加 */}
        </div>
      )}
      {/* 特殊ミッションの内容 */}
      {specialMissionContent && (
        <div>
          <p>{specialMissionContent}</p>
          {/* 特殊ミッション内容を閉じるボタン */}
          <button type="button" onClick={closeSpecialMission}>
            特殊ミッションを閉じる
          </button>
        </div>
      )}
    </>
  );
});

export default Roulette;
