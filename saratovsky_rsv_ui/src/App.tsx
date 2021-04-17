import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ButtonStart from "./components/ButtonStart/ButtonStart";

function App() {

    const buttonStartSrting = "Экскурс по сайту" // Должно приходить с бека (редачится в админке)

    const [isLearning, setIsLearning] = useState<boolean>(false);


    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <div className={'content'}>
                    <div className={"container"}>
                        <ButtonStart text={buttonStartSrting} startLearning={setIsLearning}/>
                        {/*<Route exact path='/startPage'*/}
                        {/*       render={() =>*/}
                        {/*       }*/}
                        {/*/>*/}
                        {/*<Route path='/startPageAfterRegistration'*/}
                        {/*       render={() => */}
                        {/*       }*/}
                        {/*/>*/}
                    </div>
                </div>
                {isLearning &&
                <div className={"learning"}>
                    <div><h1>ОБУЧЕНИЕ НАЧАЛОСЬ</h1></div>
                </div>
                }
            </div>
        </BrowserRouter>
    );
}

export default App;
