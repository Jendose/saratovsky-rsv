import "./AdminPanel.css";

function AdminPanel() {
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
            <form action="">
              <ul>
                <li>
                  <label htmlFor="name">Enter title for update:</label>
                  <input type="text" id="name" name="title" />
                </li>
                <li>
                  <label htmlFor="step">Step:</label>
                  <input type="number" id="step" name="step" />
                </li>
                <li>
                  <label htmlFor="msg">Description:</label>
                  <textarea id="msg" name="desc"></textarea>
                </li>
                <button
                  className="btn waves-effect waves-light button1"
                  type="submit"
                  name="action"
                >
                  Update
                </button>
              </ul>
            </form>
          </div>
          <div className="collection__div">
            <b>Buttons in database</b>
            <ul className="collection">
              <li className="collection-item">courses</li>
              <li className="collection-item">1</li>
              <li className="collection-item">
                Если вам интересно обучение, нажмите на кнопку
              </li>
            </ul>
            <ul className="collection">
              <li className="collection-item">track</li>
              <li className="collection-item">2</li>
              <li className="collection-item">
                Если вам интересно трек-развитие, нажмите на кнопку
              </li>
            </ul>
            <ul className="collection">
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
