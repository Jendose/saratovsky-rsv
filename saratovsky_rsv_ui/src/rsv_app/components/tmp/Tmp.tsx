import "./Tmp.css";

type Props = {
  currentId: number;
};

function Tmp({ currentId: number }: Props) {
  return (
    <div className="wide-main">
      <div className={"item item2 " + (number === 0 ? "focused" : "")}>
        <div className="content">
          <div className="label">Проекты</div>
          <div className="image opportunities-img"/>
        </div>
      </div>
      <div className={"item item3 " + (number === 1 ? "focused" : "")}>
        <div className="content">
          <div className="label">Обучение</div>
          <div className="image pumps-img"/>
        </div>
      </div>
      <div className={"item item4 " + (number === 2 ? "focused" : "")}>
        <div className="content">
          <div className="label">Трек развития</div>
          <div className="image growth-img"/>
        </div>
      </div>
      <div className={"item item5 " + (number === 3 ? "focused" : "")}>
        <div className="content">
          <div className="label">Истории успеха</div>
          <div className="image examples-img"/>
        </div>
      </div>
      <div className={"item item6 " + (number === 4 ? "focused" : "")}>
        <div className="content">
          <div className="label">Помощь другим</div>
          <div className="image gains-img"/>
        </div>
      </div>
      <div className="field"/>
    </div>
  );
}

export default Tmp;
