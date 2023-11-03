import React, { userEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';
export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description : "In my four internships across various industries, I've worked with diverse teams on a variety of projects as a Software Developer, which has given me the ability to quickly adapt to new environments, technologies, and work cultures. I'm a skilled coder, debugger, and communicator with a strong understanding of tasks, team dynamics, and business requirements.",
        highlights: {
            bullets: [
                "- Full-Stack Web & Mobile Development",
                "- Responsive and Interactive Front-End as per the Design",
                "- Java | Python | C# | JavaScript | Kotlin",
                "- Angular | React | ASP.NET | REST APIs | MVC",
                "- MSSQL Database | Microsoft Azure | Git",
                "- Test-Driven Development | Agile | Scrum | Pair Programming"
            ],
            heading: "Here are a Few Highlights:"
        }
    }
    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'>
                        <span>{value}</span>
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container' id = {props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'>

                    </div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{ SCREEN_CONSTANTS.description }</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span> { SCREEN_CONSTANTS.highlights.heading } </span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'>Hire Me</button>
                            <a href='Aayush Thakuri Resume.pdf' download='Aayush Thakuri Resume.pdf'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

