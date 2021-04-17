import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ButtonStart from "./components/ButtonStart/ButtonStart";
import Tmp from "./components/tmp/Tmp";

interface Button {
    title: string,
    description: string,
    step: number
}

// class ButtonObj 

const buttons: Array<Button> = [];

const buttonCycled = (current: number): number => {
  if (current + 1 > buttons.length - 1) {
    return 0;
  }
  return current + 1;
};

function App() {
  const buttonStartSrting = "Экскурс по сайту"; // Должно приходить с бека (редачится в админке)

  const [isLearning, setIsLearning] = useState<boolean>(false);
  const [button, setButton] = useState<number>(0);

  const current = buttons[button];

  return (
    <BrowserRouter>
      <div className={"wrapper"}>
        <div className={"content"}>
          <ButtonStart text={buttonStartSrting} startLearning={setIsLearning} />
        </div>

        <Tmp currentId={button} />

        {isLearning && (
          <div className={"learning"}>
            <div className={"info"}>
                <div className="title">{current.title}</div>
                <div className="desc">{current.description}</div>
              <div
                className={"button-learning"}
                onClick={() => setButton(buttonCycled(button))}
              >
                {"Next"}
              </div>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
