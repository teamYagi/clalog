"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

function App() {
  // 初期値をローカルストレージから取得するか、デフォルト値を使用する
  const [count1, setCount1] = useState(() => {
    const savedCount = localStorage.getItem("count1");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // カウントが変更されるたびにローカルストレージに保存する
  useEffect(() => {
    localStorage.setItem("count1", count1);
  }, [count1]);

  // ボタン1のクリックハンドラー関数
  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  // 初期値をローカルストレージから取得するか、デフォルト値を使用する
  const [count2, setCount2] = useState(() => {
    const savedCount = localStorage.getItem("count2");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // カウントが変更されるたびにローカルストレージに保存する
  useEffect(() => {
    localStorage.setItem("count2", count2);
  }, [count2]);

  // ボタン2のクリックハンドラー関数
  const handleClick2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container_top}>
          <p>この授業を取るべきか</p>
        </div>
        <div className={styles.container_middle}>
          <button className={styles.button1} onClick={handleClick1}>
            Yes
          </button>
          <h1 className={`${styles.heading1} ${count1}`}>{count1}pt</h1>

          <button className={styles.button2} onClick={handleClick2}>
            No
          </button>
          <h1 className={`${styles.heading} ${count2}`}>{count2}pt</h1>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.container1}>
          <h2>
            授業名 <span>漢文演習</span>
          </h2>
          <h2>
            講師名<span>中村俊樹</span>
          </h2>

          <h2>
            授業形態<span>対面</span>
          </h2>
          <h2>
            開講年度<span>2024年</span>
          </h2>
          <h2>
            開講学科<span>三回生</span>
          </h2>
        </div>
        <div className={styles.container2}>
          <h2>
            時 限 <span>6限</span>
          </h2>
          <h2>
            曜 日<span>月曜日</span>
          </h2>

          <h2>
            出席<span>あり</span>
          </h2>
          <h2>
            言 語<span>中国</span>
          </h2>
          <h2>
            学 期<span>全学</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
