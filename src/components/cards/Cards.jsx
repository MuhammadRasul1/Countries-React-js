import "../cards/Cards.css";
import { CardsItems } from "./cards-items/Items";

export function Cards(){
    return (
        <section className="cards">
            <div className="container">
                <CardsItems />
            </div>
        </section>
    )
}