import React, { useState, useEffect } from "react";
import "./App.scss";
function App() {
  const [keyboardLayout, setKeyboardLayout] = useState([
    [
      { id: 27, label: "esc", state: "default" },
      { id: 112, label: "F1" },
      { id: 113, label: "F2" },
      { id: 114, label: "F3" },
      { id: 115, label: "F4" },
      { id: 116, label: "F5" },
      { id: 117, label: "F6" },
      { id: 118, label: "F7" },
      { id: 119, label: "F8" },
      { id: 120, label: "F9" },
      { id: 121, label: "F10" },
      { id: 122, label: "F11" },
      { id: 123, label: "F12" },
      { id: 94, label: "^" },
    ],
    [
      { id: 192, label: "`", shiftlabel: "~" },
      { id: 49, label: "1", shiftlabel: "!" },
      { id: 50, label: "2", shiftlabel: "@" },
      { id: 51, label: "3", shiftlabel: "#" },
      { id: 52, label: "4", shiftlabel: "$" },
      { id: 53, label: "5", shiftlabel: "%" },
      { id: 54, label: "6", shiftlabel: "^" },
      { id: 55, label: "7", shiftlabel: "&" },
      { id: 56, label: "8", shiftlabel: "*" },
      { id: 57, label: "9", shiftlabel: "(" },
      { id: 48, label: "0", shiftlabel: ")" },
      { id: 189, label: "-", shiftlabel: "_" },
      { id: 187, label: "=", shiftlabel: "+" },
      { id: 8, label: "delete" },
      // { id: 557, label: "print screen" },
      // { id: 145, label: "scroll lock" },
      // { id: 19, label: "pause" },
    ],
    [
      { id: 9, label: "tab" },
      { id: 81, label: "Q" },
      { id: 87, label: "W" },
      { id: 69, label: "E" },
      { id: 82, label: "R" },
      { id: 84, label: "T" },
      { id: 89, label: "Y" },
      { id: 85, label: "U" },
      { id: 73, label: "I" },
      { id: 79, label: "O" },
      { id: 80, label: "P" },
      { id: 219, label: "[", shiftlabel: "{" },
      { id: 221, label: "]", shiftlabel: "}" },
      { id: 220, label: "\\", shiftlabel: "|" },
      // { id: 45, label: "insert" },
      // { id: 36, label: "home" ,
      // { id: 33, label: "page up" },
    ],
    [
      { id: 20, label: "caps lock" },
      { id: 65, label: "A" },
      { id: 83, label: "S" },
      { id: 68, label: "D" },
      { id: 70, label: "F" },
      { id: 71, label: "G" },
      { id: 72, label: "H" },
      { id: 74, label: "J" },
      { id: 75, label: "K" },
      { id: 76, label: "L" },
      { id: 186, label: ";", shiftlabel: ":" },
      { id: 222, label: "'", shiftlabel: '"' },
      { id: 13, label: "return" },
      // { id: 46, label: "delete" },
      // { id: 35, label: "end" },
      // { id: 34, label: "page down" },
    ],
    [
      { id: 16, label: "shift" },
      { id: 90, label: "Z" },
      { id: 88, label: "X" },
      { id: 67, label: "C" },
      { id: 86, label: "V" },
      { id: 66, label: "B" },
      { id: 78, label: "N" },
      { id: 77, label: "M" },
      { id: 188, label: ",", shiftlabel: "<" },
      { id: 190, label: ".", shiftlabel: ">" },
      { id: 191, label: "/", shiftlabel: "?" },
      { id: 16, label: "shift" },
      // { id: 144, label: "num lock" },
      // "num lock",
    ],
    [
      { id: 255, label: "fn" },
      { id: 17, label: "control" },
      { id: 18, label: "option" },
      { id: 91, label: "command" },
      { id: 32, label: "space" },
      { id: 92, label: "command" },
      { id: 18, label: "option" },
      { id: 37, label: "◂" },
      { id: 40, label: "▾" },
      { id: 39, label: "▸" },
      { id: 38, label: "▴" },
      // "left-arrow",
      // "top-arrow",
      // "bot-arrow",
      // "right-arrow",
    ],
  ]);
  useEffect(() => {
    const keyPressed = (e) => {
      const { keyCode } = e;
      const newState = keyboardLayout.map((row) =>
        row.map((key) => {
          if (key.id === keyCode) {
            return { ...key, state: "Blue" };
          } else {
            return key;
          }
        })
      );

      setKeyboardLayout(newState);
    };
    const keyReleased = (e) => {
      const { keyCode } = e;
      const newState = keyboardLayout.map((row) =>
        row.map((key) => {
          if (key.id === keyCode) {
            return { ...key, state: "Green" };
          } else {
            return key;
          }
        })
      );
      setKeyboardLayout(newState);
    };

    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    return () => {
      document.removeEventListener("keydown", keyPressed);
      document.removeEventListener("keyup", keyReleased);
    };
  }, []);

  const handleClick = (id) => {
    console.log(`Clicked item with id ${id}`);
  };

  return (
    <>
      <div className="app">
        <p>React Keyboard UI</p>
        <div className="keyboard">
          {keyboardLayout?.map((array, arrayIndex) => (
            <div key={arrayIndex} className="keyboard-row">
              {array.map((key) => (
                <div
                  key={key.id}
                  id={`k${key.id}`}
                  className={`keyboard-key ${key.label}`}
                  style={{ backgroundColor: `${key.state}` }}
                  tabIndex="0"
                  onClick={() => handleClick(key.label)}
                >
                  <span>
                    {key.shiftlabel}
                    <br />
                    {key.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
