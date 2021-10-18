import React, { createContext, useContext, Provider } from "react";
import Movies from "./Movies.png"
import Empowering from "./Empowering.png"
import HallOfFame from "./HallOfFame.png"
import Olympics from "./Olympics.png";

export const projects = [
    {
        name: "Movies",
        img: Movies,
    },
    {
        name: "Empowering woman",
        img: Empowering,
    },
    {
        name: "Hall of fame",
        img: HallOfFame,
    },
    {
        name: "Olympics",
        img: Olympics,
    },
];

export const projectsContext = createContext(projects);
export const projectProvider = projectsContext.Provider;

export const useProject = () => {
    return useContext(projectsContext)
}

// state provider
export const counterContext = createContext();
export const CounterProvider = counterContext.Provider;
export const useCounter = () => {
    return useContext(counterContext);
}
