import { useParams } from "react-router-dom";
import cls from "./styles.module.css";
// import { useEffect, useState } from "react";

export const Details = () => {
    
    const { name } = useParams()
    // const [country, setCountry] = useState()

    // useEffect(() => {
    //     fetch(`https://restcountries.com/` + param.name)
    //     .then(res => res.json())
    //     .then(data => setCountry(data))
    // }, [param.name])

    return(
        <div className={cls.card}>
            <p>{name}</p>
            {/* <img src={img} alt={name} /> */}
            {/* <p>{population}</p> */}
        </div>
    )
}