import React from 'react';
import style from './ButtonStart.module.css';

type Props = {
    text: string;
    startLearning: (isStarted: boolean) => void;
}

const ButtonStart = ({text, startLearning}: Props) => {
    return (
        <div className={style.button} onClick={() => startLearning}>{text}</div>
    );
}

export default ButtonStart;