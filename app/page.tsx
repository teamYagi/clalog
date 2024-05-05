
// pages/index.tsx
"use client";

import Button from "../component/button";
import InputField from "../component/textbox";
import React, { useState } from "react";
import searchData from "../utils/searchBase";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleSearchClick = async () => {
    const data = await searchData(inputValue);
    setSearchResult(`検索された結果: ${JSON.stringify(data)}`);
  };
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
>>>>>>> 51e92fd6e1667c392ee230d1acdb4eea5276e064
    </div>
  );
};
export default Home;
