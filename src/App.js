import React from "react";
import "./App.scss";
import screenshot from "./screen.jpg";
function App() {
  const keyboardLayout = [
    [
      "esc",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "^",
    ],
    [
      "~",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "delete",
      // "printscreen",
      // "scroll lock",
      // "pause",
    ],
    [
      "tab",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "[",
      "]",
      "''",
      // "insert",
      // "home",
      // "page up",
    ],
    [
      "caps lock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "return",
      // "delete",
      // "end",
      // "page down",
    ],
    [
      "shift",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      ",",
      ".",
      "/",
      "shift",
      // "num lock",
    ],
    [
      "fn",
      "control",
      "option",
      "command",
      " ",
      "command",
      "option",
      // "left-arrow",
      // "top-arrow",
      // "bot-arrow",
      // "right-arrow",
    ],
  ];
  return (
    <>
      <div className="app">
        <p>React Keyboard UI</p>
        <div className="keyboard">
          <div className="keyboard-row first">
            {keyboardLayout[0].map((row, i) => (
              <div key={i} className="keyboard-key">
                {row}
              </div>
            ))}
          </div>

          {keyboardLayout.slice(1, 5).map((row, i) => (
            <div key={i} className="keyboard-row">
              {row.map((key, j) => (
                <span
                  key={j}
                  className={`keyboard-key 
                  ${key === "delete" ? "delete" : ""}
                  ${key === "tab" ? "tab" : ""}
                  ${key === "caps lock" ? "capslock" : ""}
                  ${key === "return" ? "return" : ""}
                  ${key === "shift" ? "shift" : ""}
                  `}
                >
                  <p>{key}</p>
                </span>
              ))}
            </div>
          ))}
          <div className="keyboard-row last">
            {keyboardLayout[5].map((row, i) => (
              <div
                key={i}
                className={`keyboard-key ${row === "fn" ? "fn" : ""}
              ${row === " " ? "space" : ""}`}
              >
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={screenshot} alt={"Error"} width={"100%"}></img>
    </>
  );
}

export default App;
