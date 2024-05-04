import Image from "next/image";

import Head from "next/head"; // Next.jsのHeadコンポーネントをインポート

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </Head>
      <main>
        <div className="header">こここ</div> {/* class属性はclassNameに変更 */}
      </main>
    </div>
  );
}
