import "./Search.css";
import SearchImg from "../../assets/img/icon/search.svg";

export function Search() {

    // const BASE_URL = "https://restcountries.com/v3.1/all"

    // function getData(endpoint) {
    //   return fetch(BASE_URL + endpoint)
    //   .then(res => res.json())
    // }
    
    // let todoList = []
    // getData("todo-list").then(data => {
    //   todoList = data
    //   render(data)
    // })

    // function OnSearchChange(){
    //     if(elForm) {
    //         elForm.addEventListener("submit", (e) => {
    //           e.preventDefault()
    //           getData("todo-list?" + new URLSearchParams({
    //             name: elSearch.value.trim(),
                
    //           }), {
    //             method: "GET",
    //           }).then(res => {
    //             if(res.length > 0){
    //               render(res)
    //             }
    //           })
    //         })
    //       }
    //     }
    // }

    return (
        <section className="search">
            <div className="container search__wrapper">
                <form className="search__form">
                    <img src={SearchImg} alt="Search" width={18} height={18} />
                    <input className="search__form-input" type="search" name="search" id="search" aria-label="Search" placeholder="Search for a country..."/>
                </form>
                <select className="search__filter" name="search__filter" id="search__filter">
                    <option value="Filter by Region" selected>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    );
}