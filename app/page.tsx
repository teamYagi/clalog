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
      <h1>大学授業検索</h1>
      <InputField
        value={inputValue}
        onChange={handleInputChange}
        placeholder="検索ワードを入力"
      />
      <Button onClick={handleSearchClick} text="検索" />
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
};
export default Home;
