import React from 'react';
import './Project.css';
import memoryGame from '../assets/Projects-images/memory-game.png';
import weather from '../assets/Projects-images/weather.png';
import cv from '../assets/Projects-images/cv.png';
import calculator from '../assets/Projects-images/calculator.png';
import shop from '../assets/Projects-images/shop.png';
import tictactoe from '../assets/Projects-images/tictactoe.png';
import todo from '../assets/Projects-images/todo.png';
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import react from '../assets/react.svg';
import js from '../assets/JS.svg';
import github from '../assets/github.svg';
import { motion } from "framer-motion";

export const Projects = () => {
    return (
        <motion.div className="project-container" initial={{ x: '-50vw' }} animate={{ x: 0 }}  transition={{ duration: .5 }}>
            <div className="project">
             <header className="title"> Shopping cart</header>
             <img alt="icon" className="project-img" src={shop}></img>
             <div className="project-description">
            Technologies used : <img alt="icon" className="technology" src={react}/>   <img alt="icon" className="technology" src={html}/>   <img alt="icon" className="technology" src={css}/> .<br/>
            Desc : shopping cart made with react and react router dom , used framer motion for the animations , it has a Navbar with the number of items purchased next to 
            the cart icon  , the catalogue is fetched from the Fortnine API  , you can increment and decrement the number of items bought from the catalogue and the cart ,
            i used lifted states to send the data between components . (i was going to use USeContext , but decided it wasn't needed in this project).
             </div>

             <div className="project-links">

             <a href="https://github.com/theDoorKeeper/shopping-cart-react" target="_blank" rel="noreferrer">
	            <img alt="icon" className="project-img" src={github} />
             </a>

             <a href="https://thedoorkeeper.github.io/shopping-cart-react/" target="_blank" rel="noreferrer">
	            <button className="live-button">Live code</button>
             </a>

             </div>
             
            </div>

            <div className="project">
            <header className="title"> Memory card game</header>
            <img alt="icon" className="project-img" src={memoryGame}></img>
            <div className="project-description">
            Technologies used : <img alt="icon" className="technology" src={react}/>   <img alt="icon" className="technology" src={html}/>   <img alt="icon" className="technology" src={css}/>. <br/>
            Desc : this is my second react project , a simple memory card game , i imported the data from an array I made manually , the cards are displayed randomly
            from said array , useEffect is used to render the inital predetermined card set on mount , and then to change it depending on the array changes , it also
            includes a score board that displays your current and high score .
            </div>

            <div className="project-links">

             <a href="https://github.com/theDoorKeeper/memory-card-game" target="_blank" rel="noreferrer">
	            <img alt="icon" className="project-img" src={github} />
             </a>

             <a href="https://thedoorkeeper.github.io/memory-card-game/" target="_blank" rel="noreferrer">
	            <button className="live-button">Live code</button>
             </a>

             </div>

            </div>


            <div className="project">
            <header className="title"> CV-maker App</header>
            <img alt="icon" className="project-img" src={cv}></img>
            <div className="project-description">
            Technologies used : <img alt="icon" className="technology" src={react}/>   <img alt="icon" className="technology" src={html}/>   <img alt="icon" className="technology" src={css}/>. <br/>
            Desc : this is my first react project , it was initially made with class components then refactored using Functional components and useState , it was challenging
            confusing at times , the app consist of two components  , one that accepts input and another one to display it , changing the components was somewhat tricky because
            of the differences between useState and setState , i learned a lot during this process .
            </div>

            <div className="project-links">

             <a href="https://github.com/theDoorKeeper/react-cv-project" target="_blank" rel="noreferrer">
	            <img alt="icon" className="project-img" src={github} />
             </a>

             <a href="https://thedoorkeeper.github.io/react-cv-project/" target="_blank" rel="noreferrer">
	            <button className="live-button">Live code</button>
             </a>

             </div>

            </div>

            <div className="project">
            <header className="title"> Weather App</header>
            <img alt="icon" className="project-img" src={weather}></img>
            <div className="project-description">
            Technologies used : <img alt="icon" className="technology" src={js}/>   <img alt="icon" className="technology" src={html}/>   <img alt="icon" className="technology" src={css}/>. <br/>
            Desc: Simple JS weather App , used async await syntax to fetch data from the OpenWeather API (I understand that pushing an API key is dangerous and shouldn't be done ,
            but this is for showcase and its a free key )
            </div>

            <div className="project-links">

             <a href="https://github.com/theDoorKeeper/weather_app" target="_blank" rel="noreferrer">
	            <img alt="icon" className="project-img" src={github} />
             </a>

             <a href="https://thedoorkeeper.github.io/weather_app/" target="_blank" rel="noreferrer">
	            <button className="live-button">Live code</button>
             </a>

             </div>

            </div>

            <div className="project">
            <header className="title"> To Do app</header>
            <img alt="icon" className="project-img" src={todo}></img>
            <div className="project-description">
            Technologies used : <img alt="icon" className="technology" src={js}/>   <img alt="icon" className="technology" src={html}/>   <img alt="icon" className="technology" src={css}/>. <br/>
            Desc: Todo list app , you can create different projects and store todos inside them , with a title a desc and a date , each project can be edited and deleted 
            aswell as each todo , you can check the todo if done , each project is generated dynamically , and the code is respecting OOP principles with each part
            of a different  logic in its own module , factory functions have been used for the to-dos and the projects .
            </div>

            <div className="project-links">

             <a href="https://github.com/theDoorKeeper/ToDo_List" target="_blank" rel="noreferrer">
	            <img alt="icon" className="project-img" src={github} />
             </a>

             <a href="https://thedoorkeeper.github.io/ToDo_List/" target="_blank" rel="noreferrer">
	            <button className="live-button">Live code</button>
             </a>

             </div>

            </div>

            <div className="project">
            <header className="title"> Tictactoe</header>
            <img alt="icon" className="project-img" src={tictactoe}></img>
            <div className="project-description">
            Technologies used : <img alt="icon" className="technology" src={js}/>   <img alt="icon" className="technology" src={html}/>   <img alt="icon" className="technology" src={css}/>. <br/>
            Desc: simple tic tac toe game , with the computer making random moves , this project was great for practicing the module pattern and factory functions !
            </div>

            <div className="project-links">

             <a href="https://github.com/theDoorKeeper/TicTacToe" target="_blank" rel="noreferrer">
	            <img alt="icon" className="project-img" src={github} />
             </a>

             <a href="https://thedoorkeeper.github.io/TicTacToe/" target="_blank" rel="noreferrer">
	            <button className="live-button">Live code</button>
             </a>

             </div>

            </div>


            <div className="project">
            <header className="title"> Calculator</header>
            <img alt="icon" className="project-img" src={calculator}></img>
            <div className="project-description">
            Technologies used : <img alt="icon" className="technology" src={js}/>   <img alt="icon" className="technology" src={html}/>   <img alt="icon" className="technology" src={css}/>. <br/>
            Desc : One of my first JS projects , a simple JS calculator with sounds on click  ! i manly put this project on to show my progress since ! 
            </div>

            <div className="project-links">

             <a href="https://github.com/theDoorKeeper/calculator_JS" target="_blank" rel="noreferrer">
	            <img alt="icon" className="project-img" src={github} />
             </a>

             <a href="https://thedoorkeeper.github.io/Calculator_JS/" target="_blank" rel="noreferrer">
	            <button className="live-button">Live code</button>
             </a>

             </div>

            </div>
            
        </motion.div>
    )
}
