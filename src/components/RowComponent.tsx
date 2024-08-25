// @ts-ignore
import React from "react";

interface MonoCharacterDisplayProps {
  characters: number[];
}

const MonoCharacterDisplay: React.FC<MonoCharacterDisplayProps> = ({
  characters,
}) => {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#f3f4f6",
        borderRadius: "0.5rem",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "0.5rem",
        }}
      >
        {characters.map((char, index) => (
          <div
            key={index}
            style={{
              width: "2.5rem",
              height: "2.5rem",
              backgroundColor: "white",
              border: "2px solid #3b82f6",
              borderRadius: "0.375rem",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "1.125rem",
              color: "#1f2937",
              flexShrink: 0,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#eff6ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonoCharacterDisplay;
