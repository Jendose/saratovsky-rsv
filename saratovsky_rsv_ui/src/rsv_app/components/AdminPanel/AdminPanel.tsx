import "./AdminPanel.css";

interface Button {
  title: string;
  description: string;
  step: number;
}

type Props = {
  arr: Array<Button>;
};

function AdminPanel({ arr: Array }: Props) {
  const renderData = () => {
    console.log(Array);
    let data = [];

    for (let i = 0; i < Array.length; i++) {
      data.push(
        <ul className="collection" key={i}>
          <li className="collection-item">{Array[i].title}</li>
          <li className="collection-item">{Array[i].step}</li>
          <li className="collection-item">{Array[i].description}</li>
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
                  <input type="text" id="name" name="title" required />
                </li>
                <li>
                  <label htmlFor="step">Step:</label>
                  <input type="number" id="step" name="step" required />
                </li>
                <li>
                  <label htmlFor="msg">Description:</label>
                  <textarea id="msg" name="desc" required></textarea>
                </li>
                <button
                  className="btn waves-effect waves-light button1"
                  type="submit"
                  name="action"
                  onSubmit={(e) => {
                    console.log(e);
                  }}
                >
                  Update
                </button>
              </ul>
            </form>
          </div>
          <div className="collection__div">
            <b>Buttons in database</b>
            {renderData()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
