import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    };
    const fadeInSubscription = 
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'>
                        <span>{ props.heading ? props.heading : ''}</span>
                        { props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                        ): (
                        <div>
                        </div>
                        )}
                    </div>
                    <div className='resume-sub-heading'>
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>
                    <div className='resume-heading-description'>
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                    
                </div>
            </div>
        )
    };

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interest.svg"},
    ];

    const programmingSkillsDetails = [
        {skill: "JavaScript", ratingPercentage: 85},
        {skill: "React JS", ratingPercentage: 90},
        {skill: "Reactive Native", ratingPercentage: 70},
        {skill: "Express JS", ratingPercentage: 75},
        {skill: "Node JS", ratingPercentage: 70},
        {skill: "Mongo DB", ratingPercentage: 85},
        {skill: "Core Java", ratingPercentage: 85},
        {skill: "HTML", ratingPercentage: 75},
        {skill: "CSS", ratingPercentage: 70},
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2021", toDate: "2022"},
            description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootstrap",
        },
        {
            title: "Mobile E-Shop",
            duration: {fromDate: "2021", toDate: "2021"},
            description:
                "An ecommerce application designed to sell products online with payment system integration.",
            subHeading: "Technologies Used: React Native, Mongo DB, Express JS, Node JS, Redux.",
        }, 
        {
            title: "Ecommerce Website",
            duration: {fromDate: "Aug 2020", toDate: "2020"},
            description: 
                "Mentored a team of 5 to create an Arduino-based remote control (RC) car.",
            subHeading: "Technologies: Arduino, C++, Chassis, Transmitter.",
        }, 
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
             heading={"Minnesota State University, Mankato"}
             subHeading={"Bachelor of Science Information Technology" }
             fromDate={"2018"}
             toDate={"2023"}
             />

            <ResumeHeading
             heading={"Udemy Online Course"}
             subHeading={"Software Engineering Fundamentals" }
             fromDate={"2019"}
             toDate={"2023"}
             />

            <ResumeHeading
             heading={"Trinity High School"}
             subHeading={"Physics Math, and Computer Science" }
             fromDate={"2014"}
             toDate={"2017"}
             />
        </div>,
        
        <div className='resume-screen-container' key="work-experience">
             <ResumeHeading
             heading={"Vizient, Inc"}
             subHeading={"Software Engineering Intern"}
             fromDate={"2022"}
             toDate={"2023"}
             />
             <div className='experience-description'>
                <span className='resume-description-text'>
                Currently working as MERN stack web and mobile developr and also an online instructor on Udemy.               
                </span>
             </div>

             <div className='experience-description'>
                <span className='resume-description-text'>
                - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, 
                  users, and payments.             
                </span>
                <br/>
                <span className='resume-description-text'>
                - Integrated the web app with backend services to create new user onboarding application with dynamic form content.         
                </span>
                <br/> 
                <span className='resume-description-text'>
                - I stretch my mental capacity to develope UI as per the given designs.             
                </span>
            </div>
        </div>,
        
        <div className='resume-screen-con0tainer programming-skills-container' 
             key='programming-skills'>
             {programmingSkillsDetails.map((skill, index) =>(
            < div className='skill-parent' key={index}>
                <div className='heading-bullet'>
                </div>
                <span>{skill.skill}</span>
                <div className='skill-percentage'>
                    <div style={{width: skill.ratingPercentage + "%"}} 
                         className='active-percentage'>
                    </div>
                </div>
            </div>
        ))}
        </div>,

        <div className='resume-screen-container' key='projects'>
             {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeading 
             key={index}
             heading={projectsDetails.title}
             subHeading={projectsDetails.subHeading}
             description={projectsDetails.description}
             fromDate={projectsDetails.duration.fromDate}
             toDate={projectsDetails.duration.toDate}
            />
        ))}
        </div>,

        <div className='resume-screen-container' key='interests'>
            <ResumeHeading
             heading='Teaching'
             description='Apart from being a tech enthusiast and a code writer, I also love to teach people what I know simply because I believe sharing.'
            />

            <ResumeHeading
             heading='Music'
             description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
            />

            <ResumeHeading
             heading='Competitive Gaming'
             description='I like to challenge my reflexes a lot while competing in football games, pushing the rand and having interactive gaming sessions excites me the most.'
            />
        </div>,
    ];
    
    // const handleCarousal = (index) => {
    //     let offsetHeight = 360;
    //     let newCarousalOffset = {
    //         style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
    //         };
    //     setCarousalOffSetStyle(newCarousalOffset);
    //     setSelectedBulletIndex(index);
    //     };

     // This is new code
    const handleCarousal = (index) => {
        const carouselContainer = document.querySelector('.resume-details-carousal');
        const sections = document.querySelectorAll('.resume-screen-container');
        const sectionHeight = sections[0].offsetHeight; // Assuming all sections have the same height
      
        const newCarousalOffset = {
          style: {
            transform: `translateY(${-index * sectionHeight}px)`,
          },
        };
      
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };
    
    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
             onClick={() => handleCarousal(index)}
             className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
             key={index}
            >
                    <img className='bullet-logo'
                     src={require(`../../assests/Resume/${bullet.logoSrc}`).default} 
                     alt=''
                    />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }
    
    const getResumeScreen = () => {
        return(
            <div
            style={carousalOffSetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };
    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'Formal Biography'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>
                        {getResumeScreen()}
                    </div>
                </div>
            </div>
        </div>
    );
}
