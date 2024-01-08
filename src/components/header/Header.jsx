import "./Header.css"
import DarkMode from "./../../assets/img/icon/dark-mode.svg";

export function Header() {
    return(
    <header className="header">
        <div className="container header__wrapper">
            <h2 className="header__title">Where in the world?</h2>
            <div className="header__mode-wrapper">
                <button className="header__mode-btn" type="button">
                    <img className="header__mode-img" src={DarkMode} alt="dark-mode" width={20} height={20} />
                </button>
                <p className="header__mode-text">Dark Mode</p>
            </div>
        </div>
    </header>
    )
}