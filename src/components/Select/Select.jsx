import cls from "./styles.module.css"

export function Select({onChange = () => {}}) {
  

    return (
        <select className={cls.select} name="search__filter" id="search__filter">
            <option value="Filter by Region" selected>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}