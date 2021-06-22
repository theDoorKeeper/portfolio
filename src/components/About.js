import React from 'react';
import './About.css';
import linkedin from '../assets/linkedin.svg';
import gmail from '../assets/gmail.svg';
import { motion } from "framer-motion";

export const About = () => {
    return (
        <motion.div className="about-main" initial={{ x: '-100vw' }} animate={{ x: 0 }}>
            <div className="title">
                <h1> Chakib Boumaraf </h1>
                <h4>Front end develloper</h4>
                </div>    
                <div className="description">
            <p>Hi , I'm Chakib  a self taught front end develloper , currenctly spesialized in React and still learning , planning to go full stack using NodeJS ,
                I discovered a passion in programming , and decided to drop out to continue on this road , i love learning new concepts ,applying them , solving problems,
                my grit is what got me from not knowing what html was to building a few projects !
                     </p>
                     <ul>
                         <li className="about-list-element">  Education : 2nd year in BioTechnology</li>
                         <br/>
                        <li className="about-list-element"> Languages : English (fuent) French(Native Language) Arabic: (Professional Working Proficiency)
                          North African Dialect (Native language) Japanese(Elementary Proficiency)</li> 
                     </ul>
                     <div>
                         linkedin<a href="https://www.linkedin.com/in/chakib-boumaraf-026582211/"  target="blank">  <img src={linkedin} alt="lindkin logo" className="linkedin"/>   </a> 
                         <br/> GMail <img src={gmail} alt="gmail logo" className="linkedin" /> : boumarafchakib4@gmail.com
                     </div>
                </div>
            
        </motion.div>
    )
}
