import React from "react";
import Movies from "../../../Movies.png"
import Empowering from "../../../Empowering.png"
import HallOfFame from "../../../HallOfFame.png"
import Olympics from "../../..//Olympics.png";
import Card from "../../features/card/Card";
const Carouselnner = () => {

    return (
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={Movies} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={Empowering} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={HallOfFame} class="d-block w-100" alt="..." />
            </div>
        </div>
    )
}
export default Carouselnner;