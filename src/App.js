/* eslint-disable default-case */
import React, { useState, useEffect, useCallback, useRef } from "react";

import "./App.scss";

function App() {
  const [x, setX] = useState(0);
  let [laserY, setY] = useState(0);
  const [width, setWidth] = useState(0);
  let container = useRef(null);
  let laser = useRef(null);
  // listen for key clicks
  const keyListen = useCallback(
    (e) => {
      if (e.keyCode === 37) {
        setX(x - 10);
        if (x <= 0) {
          setX(x + 2);
        }
      }
      if (e.keyCode === 39) {
        setX(x + 10);
        if (x >= width - 50) {
          setX(x - 2);
        }
      }
    },
    [x, width]
  );

  // const shoot = () =>{
  //   if(e.keyCode === 32){

  //   }
  // }

  // add event listener when component mounts
  useEffect(() => {
    setWidth(container.offsetWidth);
    console.log(width);
    window.addEventListener("keydown", keyListen);
    return () => {
      window.removeEventListener("keydown", keyListen);
    };
  }, [keyListen, width]);
  return (
    <div className="App">
      <div className="container" id="container" ref={(el) => (container = el)}>
        <div className="ship-container" style={{ left: x }} id="ship">
          <div
            className="ship-laser"
            ref={(el) => {
              laser = el;
            }}
          ></div>
          <img src="/img/ship.png" alt="ship" className="ship" />
        </div>
      </div>
    </div>
  );
}

export default App;
