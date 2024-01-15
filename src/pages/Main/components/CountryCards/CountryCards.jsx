import { Link } from "react-router-dom"
import cls from "./styles.module.css"

export function CountryCards({img, name, population, region, capital}){
    return(
        <li className={cls.cards__item}>
            <Link to={`/detail/${name}`}>
                <img className={cls.cards__img} src={img} alt={name + " flag"} width="267px" height="160px" />
                <div className={cls.cards__wrapper}>
                    <h2 className={cls.cards__title}>{name}</h2>
                    <dl className={cls.cards__dl}>
                        <div className={cls.cards__dlWrapper}>
                            <dt className={cls.cards__dt}>Population: </dt>
                            <dd className={cls.cards__dd}>{population}</dd>        
                        </div>
                        <div className={cls.cards__dlWrapper}>
                            <dt className={cls.cards__dt}>Region: </dt>
                            <dd className={cls.cards__dd}>{region}</dd>
                        </div>
                        <div className={cls.cards__dlWrapper}>
                            <dt className={cls.cards__dt}>Capital: </dt>
                            <dd className={cls.cards__dd}>{capital}</dd>
                        </div>
                    </dl>
                </div>
            </Link>
        </li>
    )
}