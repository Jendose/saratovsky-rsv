import "./AdminPanel.css";
import axios from "axios";
import { useState, useEffect } from "react";

interface Button {
  title: string;
  description: string;
  step: number;
}

const buttons: Array<Button> = [];

function AdminPanel() {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDesc, setInputDesc] = useState<string>("");
  const [inputStep, setInputStep] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(false);
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

        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const renderData = () => {
    let data = [];

    for (let i = 0; i < buttons.length; i++) {
      data.push(
        <ul className="collection" key={i}>
          <li className="collection-item">{buttons[i].title}</li>
          <li className="collection-item">{buttons[i].step}</li>
          <li className="collection-item">{buttons[i].description}</li>
        </ul>
      );
    }

    return data;
  };

  return (
    <div>
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Admin-Panel
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/">Back to main</a>
              </li>
              <li>
                <a href="sass.html">Buttons</a>
              </li>
              <li>
                <a href="badges.html">Chat-bot</a>
              </li>
              <li>
                <a href="collapsible.html">Analytics</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <div className="main__info">
          <div className="form__div">
            <form action="http://localhost:4000/update" method="POST">
              <ul>
                <li>
                  <label htmlFor="name">Enter title for update:</label>
                  <input
                    type="text"
                    id="name"
                    name="title"
                    value={inputTitle}
                    required
                    onChange={(e) => setInputTitle(e.currentTarget.value)}
                  />
                </li>
                <li>
                  <label htmlFor="step">Step:</label>
                  <input
                    type="number"
                    id="step"
                    name="step"
                    value={inputStep}
                    min={1}
                    max={500}
                    required
                    onChange={(e) => setInputStep(+e.currentTarget.value)}
                  />
                </li>
                <li>
                  <label htmlFor="msg">Description:</label>
                  <textarea
                    id="msg"
                    name="desc"
                    value={inputDesc}
                    required
                    onChange={(e) => setInputDesc(e.currentTarget.value)}
                  ></textarea>
                </li>
                <button
                  className="btn waves-effect waves-light button1"
                  type="submit"
                  name="action"
                  onClick={(e) => {
                    setTimeout(() => {
                      window.location.reload();
                    }, 500);
                  }}
                >
                  Update
                </button>
              </ul>
            </form>
          </div>
          <div className="collection__div">
            <b>Buttons in database</b>

            {!isLoaded ? <div>{"Loading..."}</div> : renderData()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
