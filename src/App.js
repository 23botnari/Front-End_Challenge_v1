import React, { useState, useEffect } from "react";
import "./App.scss";
const App = () => {
  const [keyboardLayout, setKeyboardLayout] = useState([
    [
      { id: 27, label: "esc", state: "White" },
      { id: 112, label: "F1", state: "White" },
      { id: 113, label: "F2", state: "White" },
      { id: 114, label: "F3", state: "White" },
      { id: 115, label: "F4", state: "White" },
      { id: 116, label: "F5", state: "White" },
      { id: 117, label: "F6", state: "White" },
      { id: 118, label: "F7", state: "White" },
      { id: 119, label: "F8", state: "White" },
      { id: 120, label: "F9", state: "White" },
      { id: 121, label: "F10", state: "White" },
      { id: 122, label: "F11", state: "White" },
      { id: 123, label: "F12", state: "White" },
      { id: 94, label: "^", state: "White" },
    ],
    [
      { id: 192, label: "`", shiftlabel: "~", state: "White" },
      { id: 49, label: "1", shiftlabel: "!", state: "White" },
      { id: 50, label: "2", shiftlabel: "@", state: "White" },
      { id: 51, label: "3", shiftlabel: "#", state: "White" },
      { id: 52, label: "4", shiftlabel: "$", state: "White" },
      { id: 53, label: "5", shiftlabel: "%", state: "White" },
      { id: 54, label: "6", shiftlabel: "^", state: "White" },
      { id: 55, label: "7", shiftlabel: "&", state: "White" },
      { id: 56, label: "8", shiftlabel: "*", state: "White" },
      { id: 57, label: "9", shiftlabel: "(", state: "White" },
      { id: 48, label: "0", shiftlabel: ")", state: "White" },
      { id: 189, label: "-", shiftlabel: "_", state: "White" },
      { id: 187, label: "=", shiftlabel: "+", state: "White" },
      { id: 8, label: "delete", state: "White" },
      // { id: 557, label: "print screen" },
      // { id: 145, label: "scroll lock" },
      // { id: 19, label: "pause" },
    ],
    [
      { id: 9, label: "tab", state: "White" },
      { id: 81, label: "Q", state: "White" },
      { id: 87, label: "W", state: "White" },
      { id: 69, label: "E", state: "White" },
      { id: 82, label: "R", state: "White" },
      { id: 84, label: "T", state: "White" },
      { id: 89, label: "Y", state: "White" },
      { id: 85, label: "U", state: "White" },
      { id: 73, label: "I", state: "White" },
      { id: 79, label: "O", state: "White" },
      { id: 80, label: "P", state: "White" },
      { id: 219, label: "[", shiftlabel: "{", state: "White" },
      { id: 221, label: "]", shiftlabel: "}", state: "White" },
      { id: 220, label: "\\", shiftlabel: "|", state: "White" },
      // { id: 45, label: "insert" },
      // { id: 36, label: "home" ,
      // { id: 33, label: "page up" },
    ],
    [
      { id: 20, label: "caps lock", state: "White" },
      { id: 65, label: "A", state: "White" },
      { id: 83, label: "S", state: "White" },
      { id: 68, label: "D", state: "White" },
      { id: 70, label: "F", state: "White" },
      { id: 71, label: "G", state: "White" },
      { id: 72, label: "H", state: "White" },
      { id: 74, label: "J", state: "White" },
      { id: 75, label: "K", state: "White" },
      { id: 76, label: "L", state: "White" },
      { id: 186, label: ";", shiftlabel: ":", state: "White" },
      { id: 222, label: "'", shiftlabel: '"', state: "White" },
      { id: 13, label: "return", state: "White" },
      // { id: 46, label: "delete" },
      // { id: 35, label: "end" },
      // { id: 34, label: "page down" },
    ],
    [
      { id: 16, label: "shift", state: "White" },
      { id: 90, label: "Z", state: "White" },
      { id: 88, label: "X", state: "White" },
      { id: 67, label: "C", state: "White" },
      { id: 86, label: "V", state: "White" },
      { id: 66, label: "B", state: "White" },
      { id: 78, label: "N", state: "White" },
      { id: 77, label: "M", state: "White" },
      { id: 188, label: ",", shiftlabel: "<", state: "White" },
      { id: 190, label: ".", shiftlabel: ">", state: "White" },
      { id: 191, label: "/", shiftlabel: "?", state: "White" },
      { id: 16, label: "shift" },
      // { id: 144, label: "num lock" },
      // "num lock",
    ],
    [
      { id: 255, label: "fn", state: "White" },
      { id: 17, label: "control", state: "White" },
      { id: 18, label: "option", state: "White" },
      { id: 91, label: "command", state: "White" },
      { id: 32, label: "space", state: "White" },
      { id: 92, label: "command", state: "White" },
      { id: 18, label: "option", state: "White" },
      { id: 37, label: "◂", state: "White" },
      { id: 40, label: "▾", state: "White" },
      { id: 39, label: "▸", state: "White" },
      { id: 38, label: "▴", state: "White" },
      // "left-arrow",
      // "top-arrow",
      // "bot-arrow",
      // "right-arrow",
    ],
  ]);
  const [secondsLeft, setSecondsLeft] = useState(null);

  const startTimer = () => {
    setSecondsLeft(4);
  };
  const mouseDown = (id) => {
    const newState = keyboardLayout.map((row) =>
      row.map((key) => {
        if (key.id === id) {
          return { ...key, state: "Blue" };
        } else {
          return key;
        }
      })
    );
    setTimeout(() => {
      setKeyboardLayout([...newState]);
    }, 3000);
  };
  const mouseUp = (id) => {
    const newState = keyboardLayout.map((row) =>
      row.map((key) => {
        if (key.id === id) {
          return { ...key, state: "Green" };
        } else {
          return key;
        }
      })
    );
    setKeyboardLayout(newState);
  };
  useEffect(() => {
    const keyDown = (e) => {
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
      setTimeout(() => {
        setKeyboardLayout([...newState]);
      }, 3000);
    };

    const keyUp = (e) => {
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
      startTimer();
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    return () => {
      window.removeEventListener("mouseup", keyDown);
      window.removeEventListener("mousedown", keyUp);
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    let intervalId = null;
    if (secondsLeft !== null && secondsLeft > 0) {
      intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      clearInterval(intervalId);
      const resetState = keyboardLayout.map((row) =>
        row.map((key) => {
          if (key.id) {
            return { ...key, state: "White" };
          } else {
            return key;
          }
        })
      );
      setKeyboardLayout(resetState);
    }

    return () => clearInterval(intervalId);
  }, [secondsLeft]);
  return (
    <>
      <div className="app">
        <p>React Keyboard UI</p>
        {secondsLeft === null ? (
          <div>Timer</div>
        ) : secondsLeft > 0 ? (
          <div>{secondsLeft} seconds left</div>
        ) : (
          <div>Keyboard was restored by default.</div>
        )}
        <div className="keyboard">
          {keyboardLayout?.map((row) => (
            <div key={row} className="keyboard-row">
              {row.map((key) => (
                <div
                  key={key.id}
                  id={`k${key.id}`}
                  className={`keyboard-key ${key.label}`}
                  style={{ backgroundColor: `${key.state}` }}
                  onMouseDown={() => mouseDown(key.id)}
                  onMouseUp={() => mouseUp(key.id)}
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
};

export default App;
