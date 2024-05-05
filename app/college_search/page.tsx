// pages/index.tsx
"use client";

import Button from "../component/button";
import InputField from "../component/textbox";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [displayedValue, setDisplayedValue] = useState<string>("");

  const handleClick = () => {
    setDisplayedValue(inputValue);
  };
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <div>
      <h1>大学検索</h1>

      <InputField
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <Button onClick={handleClick} text="検索" />

      {displayedValue && <p>You typed: {displayedValue}</p>}
    </div>
  );
};

export default Home;
