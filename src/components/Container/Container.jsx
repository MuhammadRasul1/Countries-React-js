import cls from "./styles.module.css";

export function Container ({children}) {
    return (
        <div className={cls.container}>
            {children}
        </div>
    )
}