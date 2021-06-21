import React from 'react'
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import react from '../assets/react.svg';
import git from '../assets/git.svg';
import js from '../assets/JS.svg';

export const Skills = () => {
    return (
        <div className="skils-wrapper">
            <img src={css} alt="css logo" className="skil-logo"/>
            <img src={html} alt="html logo" className="skil-logo"/>
            <img src={react} alt="react logo" className="skil-logo"/>
            <img src={git} alt="git logo" className="skil-logo"/>
            <img src={js} alt="js logo" className="skil-logo"/>
        </div>
    )
}
