import Head from "next/head"; // Next.jsのHeadコンポーネントをインポート
import React from "react";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        {" "}
        {/* Headコンポーネントを使用してページのヘッダー情報を設定 */}
        {/* CSSファイルのパスはルート相対パスで指定 */}
      </Head>
      <main>
        <div className={styles.button}>ko</div>{" "}
        {/* class属性はclassNameに変更 */}
      </main>
    </div>
  );
}
