import { BackBtn } from "./components/BackBtn";
import { Details } from "./components/Details";
import { Container } from "./../../components/Container/Container";
import cls from "./styles.module.css"



export const CardDetail = () => {

    return (
        <section className={cls.CardDetail}>
            <Container>
                <BackBtn />
                <Details />
            </Container>
        </section>
    )
}