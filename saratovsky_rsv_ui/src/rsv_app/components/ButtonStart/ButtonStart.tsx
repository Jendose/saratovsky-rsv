import style from './ButtonStart.module.css';

type Props = {
    text: string;
    startLearning: (isStarted: boolean) => void;
}

const ButtonStart = ({text, startLearning}: Props) => {
    return (
        <div id={"button"} className={style.button} onClick={() => startLearning(true)}>{text}</div>
    );
}

export default ButtonStart;