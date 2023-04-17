import React, {useState} from "react";
import PorkerFilter from "./PorkerFilter";
import PorkerTile from "./PorkerTile";

function Porkers({hogs}) {
    console.log(hogs, "From the porkers");

    const [selectedCategory, setSelectedCategory] = useState("All")

    const onOptionSelect = (option) => {
        console.log(option);
        setSelectedCategory(option);
    };

    const greasedFilter = hogs.filter((hog) => {
        if (selectedCategory === "All") {
            return true;
        } else if (selectedCategory === "Greased") {
            return hog.greased;
        } else {
            return !hog.greased
        }
    })

    const hogsToDisplay = greasedFilter.map((hog) => {
        return (
            <PorkerTile
                key={hog.name}
                name={hog.name}
                image={hog.image}
                weight={hog.weight}
                greased={hog.greased}
                specialty={hog.specialty}
                highestMedal={hog["highest medal achieved"]}
            />
        )
    })

    return (
        <div>
            <PorkerFilter onOptionSelect={onOptionSelect}/>
            <div className="Porkers">{hogsToDisplay}</div>
        </div>
    )
}

export default Porkers