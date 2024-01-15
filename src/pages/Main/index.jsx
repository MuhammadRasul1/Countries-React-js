import cls from "./styles.module.css"
import { CountryCards } from "./components/CountryCards/CountryCards"
import { Container } from "./../../components/Container/Container"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { Select } from "../../components/Select/Select"
import { useEffect, useState } from "react"

const BASE_URL="https://restcountries.com/v3.1/"

export const Main = () => {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")

    function onSearchChange(e){
        setSearch(e.target.value)
    }

    function onSelectChange(e){
        const url = select ? `region/${select}` : 'all'
        fetch(BASE_URL + url)
        .then(res => res.json())
        .then(data => {
            setSelect(data)
        })
    }

  

    useEffect(()=>{
        const url = search ? `name/${search}` : 'all'

        fetch(BASE_URL + url)
        .then(res => res.json())
        .then(data => {
            if(data.length) setCountries(data)
        })
    }, [search])

    return (
        <article className={cls.main}>
            <Container >
                <form className={cls.form}>
                    <SearchInput 
                        onChange={onSearchChange}
                    />
                    <Select 
                        onChange={onSelectChange}
                    />
                </form>
                <article className={cls.CountriesLists}>
                    <ul className={cls.cards__list}>
                        { 
                            countries?.map((card, index) => (
                                <CountryCards 
                                    img={card.flags?.png}
                                    name={card.name?.common}
                                    population={card.population}
                                    region={card.region}
                                    capital={card.capital?.[0]}
                                    key={index}
                                /> 
                            ))
                        }
                    </ul>
                </article>
            </Container>
        </article>
        )
}