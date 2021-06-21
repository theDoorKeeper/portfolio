import React from 'react';
import './Project.css';
import memoryGame from '../assets/Projects-images/memory-game.png';
import weather from '../assets/Projects-images/weather.png';
import cv from '../assets/Projects-images/cv.png';
import calculator from '../assets/Projects-images/calculator.png';
import shop from '../assets/Projects-images/shop.png';
import tictactoe from '../assets/Projects-images/tictactoe.png';
import todo from '../assets/Projects-images/todo.png';
export const Projects = () => {
    return (
        <div className="project-container">
            <div className="project">
             <header className="title">Project : blablabla</header>
             <img src={shop}></img>
             <div className="project-description"></div>
            </div>
            <div className="project">
            <header className="title">Project : blablabla</header>
            <img src={memoryGame}></img>
            <div className="project-description"></div>
            </div>
            <div className="project">
            <header className="title">Project : blablabla</header>
            <img src={cv}></img>
            <div className="project-description"></div>
            </div>
            <div className="project">
            <header className="title">Project : blablabla</header>
            <img src={weather}></img>
            <div className="project-description"></div>
            </div>
            <div className="project">
            <header className="title">Project : blablabla</header>
            <img src={todo}></img>
            <div className="project-description"></div>
            </div>
            <div className="project">
            <header className="title">Project : blablabla</header>
            <img src={tictactoe}></img>
            <div className="project-description"></div>
            </div>
            <div className="project">
            <header className="title">Project : blablabla</header>
            <img src={calculator}></img>
            <div className="project-description"></div>
            </div>
            
        </div>
    )
}
