import { useNavigate } from "react-router-dom"
import cls from "./styles.module.css"
import BackArrow from "./../../../../assets/img/icon/back.svg"

export function BackBtn() {
    const navigate = useNavigate()

    return(
        <button className={cls.btn} onClick={() => navigate(-1)}>
            <img src={BackArrow} alt="Back arrow" width={20} height={20} />
            <span className={cls.btnText}>Back</span>
        </button>
    )
}