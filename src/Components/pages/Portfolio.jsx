import React, {useState} from "react";
import { portfolio } from "../data/data.js"
import { Visibility } from "@mui/icons-material";
import Heading from "../common/Heading.jsx";
function Portfolio() {

const allCategory = ["all", ...new Set(portfolio.map((context) => context.category))];
const [list, setList] = useState(portfolio);
const [category, setCategory] = useState(allCategory);
console.log(setCategory);
const filterItems = (category) => {
    const newItems = portfolio.filter((context) => context.category === category);
    setList(newItems);

    if (category === "all") {
        setList(portfolio);
    }
}
    return (
        <>
        <article>
            <div className="container">
            <Heading title="Portfolio" />
                <div className="catButton">
                    {category.map((cat, i) => (
                        <button className="primaryBtn" key={i} onClick={() => filterItems(cat)}>{cat}</button>
                    ))}
                </div>
            <div className="content grid3">
            {list.map((context, i) => (
                <div className="box" key={i} data-aos='fade-up'>
                
                    <div className="img">
                        <img src={context.cover} alt="img" />
                    </div>
                    <div className="overlay">
                        <h3>{context.title}</h3>
                        <span>{context.name}</span>
                        <Visibility />
                    </div>
                </div>
            ))}
            </div>
            </div>
        </article>
        </>
    )

}

export default Portfolio;