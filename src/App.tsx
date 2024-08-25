import React, { useState, useEffect } from "react";
import RowComponent from "./components/RowComponent";
import calculateBPEStep from "./utils";

const BPEVisualization: React.FC = () => {
  const [inputText, setInputText] = useState("halli hallo");
  const [tokenLists, setTokenLists] = useState<number[][]>([]);

  useEffect(() => {
    if (inputText) {
      const initialTokens = inputText
        .split("")
        .map((char) => char.charCodeAt(0));
      const newTokenLists = [initialTokens];

      while (newTokenLists[newTokenLists.length - 1].length > 1) {
        newTokenLists.push(
          calculateBPEStep(newTokenLists[newTokenLists.length - 1])
        );
      }

      setTokenLists(newTokenLists);
    } else {
      setTokenLists([]);
    }
  }, [inputText]);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2>BPE Visualization:</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      {tokenLists.map((list, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <RowComponent characters={list} />
        </div>
      ))}
    </div>
  );
};

export default BPEVisualization;
