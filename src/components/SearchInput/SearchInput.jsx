import cls from "./styles.module.css";
import SearchImg from "../../assets/img/icon/search.svg";

export function SearchInput({ placeholder="Search for a country...", type="search", id="search", ariaLabel="Search", name="search", onChange = () => {} }) {
    return (
        <div className={cls.search__wrapper}>
            <img src={SearchImg} alt="Search" width={18} height={18} />
            <input className={cls.search__formInput} 
                type={type}
                name={name}
                id={id} 
                aria-label={ariaLabel} 
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}