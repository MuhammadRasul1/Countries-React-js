import cls from "./styles.module.css"
import DarkMode from "./../../assets/img/icon/dark-mode.svg";
import { Container } from "../Container/Container";

export function Header() {
    return (
        <header className={cls.header}>
            <Container>
                <div className={cls.header__wrapper}>
                    <h2 className={cls.header__title}>Where in the world?</h2>
                    <div className={cls.header__modeWrapper}>
                        <button className={cls.header__modeBtn} type="button">
                            <img className={cls.header__modeImg} src={DarkMode} alt="dark-mode" width={20} height={20} />
                        </button>
                        <p className={cls.header__modeText}>Dark Mode</p>
                    </div>
                </div>
            </Container>
        </header>
    )
}   

