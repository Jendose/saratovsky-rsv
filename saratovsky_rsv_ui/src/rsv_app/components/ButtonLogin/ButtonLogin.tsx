import style from './ButtonLogin.module.css';
import {useState} from "react";

type Props = {
    loginAsUser: (isUserLogined: boolean) => void;
    loginAsAdmin: (isAdminLogined: boolean) => void;
}

const ButtonLogin = ({loginAsUser, loginAsAdmin}: Props) => {

    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [isLogined, setIsLogined] = useState<boolean>(false);

    function userLogin() {
        loginAsUser(true);
        setIsLogined(true);
        setIsOpened(false);
    }

    function adminLogin() {
        loginAsAdmin(true);
        setIsLogined(true);
        setIsOpened(false);
    }

    function handleLogin() {
        if(isLogined){
            setIsLogined(false);
            loginAsUser(false);
            loginAsAdmin(false);
        }
        else {
            if(isOpened){
                setIsOpened(false);
            }
            else {
                setIsOpened(true);
            }
        }
    }

    return (
        <div className={style.main_button}>
            <div id={"button"} className={style.button} onClick={handleLogin}>{isLogined ? "Выйти" : "Войти"}</div>
            { isOpened &&
            <div className={style.loginAsUser} onClick={userLogin}>Зайти как пользователь</div>
            }
            { isOpened &&
                <div className={style.loginAsAdmin} onClick={adminLogin}>Зайти как админ</div>
            }
        </div>
    );
}

export default ButtonLogin;