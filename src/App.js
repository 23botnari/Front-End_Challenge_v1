import React, { useState, useEffect } from "react";
import "./App.scss";
const App = () => {
  const [keyboardLayout, setKeyboardLayout] = useState([
    [
      { id: 27, label: "esc", state: "default" },
      { id: 112, label: "F1", state: "default" },
      { id: 113, label: "F2", state: "default" },
      { id: 114, label: "F3", state: "default" },
      { id: 115, label: "F4", state: "default" },
      { id: 116, label: "F5", state: "default" },
      { id: 117, label: "F6", state: "default" },
      { id: 118, label: "F7", state: "default" },
      { id: 119, label: "F8", state: "default" },
      { id: 120, label: "F9", state: "default" },
      { id: 121, label: "F10", state: "default" },
      { id: 122, label: "F11", state: "default" },
      { id: 123, label: "F12", state: "default" },
      { id: 94, label: "^", state: "default" },
    ],
    [
      { id: 192, label: "`", shiftlabel: "~", state: "default" },
      { id: 49, label: "1", shiftlabel: "!", state: "default" },
      { id: 50, label: "2", shiftlabel: "@", state: "default" },
      { id: 51, label: "3", shiftlabel: "#", state: "default" },
      { id: 52, label: "4", shiftlabel: "$", state: "default" },
      { id: 53, label: "5", shiftlabel: "%", state: "default" },
      { id: 54, label: "6", shiftlabel: "^", state: "default" },
      { id: 55, label: "7", shiftlabel: "&", state: "default" },
      { id: 56, label: "8", shiftlabel: "*", state: "default" },
      { id: 57, label: "9", shiftlabel: "(", state: "default" },
      { id: 48, label: "0", shiftlabel: ")", state: "default" },
      { id: 189, label: "-", shiftlabel: "_", state: "default" },
      { id: 187, label: "=", shiftlabel: "+", state: "default" },
      { id: 8, label: "delete", state: "default" },
      // { id: 557, label: "print screen" },
      // { id: 145, label: "scroll lock" },
      // { id: 19, label: "pause" },
    ],
    [
      { id: 9, label: "tab", state: "default" },
      { id: 81, label: "Q", state: "default" },
      { id: 87, label: "W", state: "default" },
      { id: 69, label: "E", state: "default" },
      { id: 82, label: "R", state: "default" },
      { id: 84, label: "T", state: "default" },
      { id: 89, label: "Y", state: "default" },
      { id: 85, label: "U", state: "default" },
      { id: 73, label: "I", state: "default" },
      { id: 79, label: "O", state: "default" },
      { id: 80, label: "P", state: "default" },
      { id: 219, label: "[", shiftlabel: "{", state: "default" },
      { id: 221, label: "]", shiftlabel: "}", state: "default" },
      { id: 220, label: "\\", shiftlabel: "|", state: "default" },
      // { id: 45, label: "insert" },
      // { id: 36, label: "home" ,
      // { id: 33, label: "page up" },
    ],
    [
      { id: 20, label: "caps lock", state: "default" },
      { id: 65, label: "A", state: "default" },
      { id: 83, label: "S", state: "default" },
      { id: 68, label: "D", state: "default" },
      { id: 70, label: "F", state: "default" },
      { id: 71, label: "G", state: "default" },
      { id: 72, label: "H", state: "default" },
      { id: 74, label: "J", state: "default" },
      { id: 75, label: "K", state: "default" },
      { id: 76, label: "L", state: "default" },
      { id: 186, label: ";", shiftlabel: ":", state: "default" },
      { id: 222, label: "'", shiftlabel: '"', state: "default" },
      { id: 13, label: "return", state: "default" },
      // { id: 46, label: "delete" },
      // { id: 35, label: "end" },
      // { id: 34, label: "page down" },
    ],
    [
      { id: 16, label: "shift", state: "default" },
      { id: 90, label: "Z", state: "default" },
      { id: 88, label: "X", state: "default" },
      { id: 67, label: "C", state: "default" },
      { id: 86, label: "V", state: "default" },
      { id: 66, label: "B", state: "default" },
      { id: 78, label: "N", state: "default" },
      { id: 77, label: "M", state: "default" },
      { id: 188, label: ",", shiftlabel: "<", state: "default" },
      { id: 190, label: ".", shiftlabel: ">", state: "default" },
      { id: 191, label: "/", shiftlabel: "?", state: "default" },
      { id: 16, label: "shift" },
      // { id: 144, label: "num lock" },
      // "num lock",
    ],
    [
      { id: 255, label: "fn", state: "default" },
      { id: 17, label: "control", state: "default" },
      { id: 18, label: "option", state: "default" },
      { id: 91, label: "command", state: "default" },
      { id: 32, label: "space", state: "default" },
      { id: 92, label: "command", state: "default" },
      { id: 18, label: "option", state: "default" },
      { id: 37, label: "◂", state: "default" },
      { id: 40, label: "▾", state: "default" },
      { id: 39, label: "▸", state: "default" },
      { id: 38, label: "▴", state: "default" },
      // "left-arrow",
      // "top-arrow",
      // "bot-arrow",
      // "right-arrow",
    ],
  ]);
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [previousKeys, setPreviousKeys] = useState([]);
  const startTimer = () => {
    setSecondsLeft(4);
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
      setPreviousKeys((prevKeys) => [...prevKeys, keyCode]);
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

  const keyRepeat = () => {
    {
      previousKeys.map((keyCode, index) => {
        setTimeout(() => {
          const newState = keyboardLayout.map((row) =>
            row.map((key) => {
              if (key.id === keyCode) {
                return { ...key, state: "Blue" };
              } else {
                return key;
              }
            })
          );
          setKeyboardLayout([...newState]);
        }, index * 200);
      });

      // setKeyboardLayout([]);
    }
  };
  console.log(previousKeys);

  return (
    <>
      <div className="app">
        <p>React Keyboard UI</p>
        {secondsLeft === null ? (
          <div>Timer</div>
        ) : secondsLeft > 0 ? (
          <div>{secondsLeft} seconds left</div>
        ) : (
          <div>All keys has been restored to default.</div>
        )}
        <button onClick={keyRepeat}>Repeat</button>
        <div className="keyboard">
          {keyboardLayout?.map((row) => (
            <div className="keyboard-row">
              {row.map((key) => (
                <div
                  id={`k${key.id}`}
                  className={`keyboard-key ${key.label}`}
                  style={{ backgroundColor: `${key.state}` }}
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
        <div>{}</div>
      </div>
    </>
  );
};

export default App;
