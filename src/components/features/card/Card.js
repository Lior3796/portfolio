import React from "react";

const Card = ({ Project }) => {
    return (
        <div class="card" className="projects" >
            <div class="card-body">
                <h4 class="card-text">{Project.name}</h4>
            </div>
            <img src={Project.img} class="card-img-top" alt="..." />
        </div>
    )
}
export default Card;