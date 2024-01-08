import { useEffect, useState } from "react";

export function CardsItems(){
    const BASE_URL = "https://restcountries.com/"
    
    function getData(endpoint) {
      return fetch(BASE_URL + endpoint)
      .then(res => res.json())
    }

    const [cards, setCards] = useState([])
    
    useEffect(()=>{
        getData("v3.1/all")
        .then((cards) => setCards(cards))
    },[])

    return(
        <ul className="cards__list">
            { cards.map(cards => {
                return (
                    <li className="cards__item">
                        <img class="cards__img" src={cards.flags.png} alt="USA" width="267px" height="160px" />
                        <div class="cards__wrapper">
                            <h2 class="cards__title">{cards.name.common}</h2>
                            <dl class="cards__dl">
                                <dt class="cards__dt">Population: </dt>
                                <dd class="cards__dd">{cards.population}</dd>
                                <dt class="cards__dt">Region: </dt>
                                <dd class="cards__dd">{cards.region}</dd>
                                <dt class="cards__dt">Capital: </dt>
                                <dd class="cards__dd">{cards.capital}</dd>
                            </dl>
                        </div>
                    </li>
                )}
            )}                   
        </ul>
    )
}