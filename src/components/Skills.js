import React from 'react'
import './Skills.css'
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import react from '../assets/react.svg';
import git from '../assets/git.svg';
import js from '../assets/JS.svg';

export const Skills = () => {
    return (
        <div className="skills-wrapper">
            <img src={css} alt="css logo" className="skills-logo"/>
            <img src={html} alt="html logo" className="skills-logo"/>
            <img src={react} alt="react logo" className="skills-logo"/>
            <img src={git} alt="git logo" className="skills-logo"/>
            <img src={js} alt="js logo" className="skills-logo"/>
        </div>
    )
}
