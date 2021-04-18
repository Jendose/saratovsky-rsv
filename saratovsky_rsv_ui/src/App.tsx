import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import ButtonStart from "./rsv_app/components/ButtonStart/ButtonStart";
import Tmp from "./rsv_app/components/tmp/Tmp";
import "./style.css";
import { ChatHelper } from "./chatHelper";
import ButtonLogin from "./rsv_app/components/ButtonLogin/ButtonLogin";
import AdminPanel from "./rsv_app/components/AdminPanel/AdminPanel";

interface Button {
  title: string;
  description: string;
  step: number;
}

const buttons: Array<Button> = [];

const buttonCycled = (current: number): number => {
  if (current + 1 > buttons.length - 1) {
    return current;
  }
  return current + 1;
};

let Helper: ChatHelper;

function App() {
  const buttonStartSrting = "Экскурс по сайту"; // Должно приходить с бека (редачится в админке)

  const [isLearning, setIsLearning] = useState<boolean>(false);
  const [button, setButton] = useState<number>(-1);

  const [isUserLogined, setIsUserLogined] = useState<boolean>(false); // TODO: ОТ ЭТОГО зависит содержание первого сообщения
  const [isAdminLogined, setIsAdminLogined] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/start-learning")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          let item = response.data[i];
          buttons.push({
            title: item.title,
            description: item.description,
            step: item.step,
          });
        }

        buttons.sort((a, b) => {
          if (a.step > b.step) return 1;
          if (a.step === b.step) return 0;
          return -1;
        });

        current = buttons[0];
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    globalThis.addEventListener("load", (event) => {
      // axios.post("http://localhost:4000/clicks", { url: window.location.href });
    });
  }, []);

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      Helper = new ChatHelper("#chatHelper", {});
    }
  }, []);

  const startLearning = (value: boolean): void => {
    setIsLearning(value);
  };

  let current: Button = buttons[button];

  return (
    <BrowserRouter>
      <Route exact path="/">
        <div id="chatHelper"></div>
        <div className={"wrapper " + (isLearning ? "blocked" : "")}>
          <div className={"wrapper_content"}>
            <div className={"content"}>
              <ButtonLogin
                loginAsUser={(value: boolean) => setIsUserLogined(value)}
                loginAsAdmin={(value: boolean) => setIsAdminLogined(value)}
              />
              <ButtonStart
                text={buttonStartSrting}
                startLearning={() => {
                  startLearning(true);
                  setButton(0);
                }}
              />
              {isAdminLogined && (
                <div>
                  <NavLink to={"/admin"} className={"navLink-admin"}>
                    {<div className={"button-edit"}>{"Редактировать"}</div>}
                  </NavLink>
                </div>
              )}
            </div>

            <Tmp currentId={button} />

            {isLearning && (
              <div className={"learning"}>
                <div className={"info"}>
                  <div className="wrapp">
                    <div className="title">{current.title}</div>
                    <div className="desc">{current.description}</div>
                    <div className="buttons">
                      <div
                        className={"button-learning"}
                        onClick={() => {
                          if (button === buttons.length - 1) {
                            startLearning(false);
                            setButton(-1);
                            if (isUserLogined) {
                              Helper.sendMessage(
                                "Вы прошли обучение! Спасибо за регистрацию! Остались ли у Вас вопросы?",
                                "bot"
                              );
                            } else {
                              Helper.sendMessage(
                                "Вы прошли обучение! Не забывайте, что при регистрации вы получите больше возможностей!",
                                "bot"
                              );
                            }
                            Helper.openChatHelper();
                          } else {
                            setButton(buttonCycled(button));
                          }
                        }}
                      >
                        {button === buttons.length - 1 ? "Завершить" : "Далее"}
                      </div>
                      <div
                        className={"button-cancel"}
                        onClick={() => {
                          startLearning(false);
                          setButton(-1);
                        }}
                      >
                        {"Отмена"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Route>
      <Route path="/admin" component={AdminPanel} />
    </BrowserRouter>
  );
}

export default App;
