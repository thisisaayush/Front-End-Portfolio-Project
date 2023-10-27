import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>  
                            <a href='https://www.linkedin.com/in/thisisaayushthakuri/'>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href='#'>
                                <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    
                        <div className="profile-details-name">
                            <span className="primary-text">
                                {" "}
                                Hello, I'm <span className="highlighted-text">Aayush</span>
                            </span>
                        </div>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Software Engineer", 2000,
                                        "Application Developer", 2000,
                                        "Full-Stack Developer", 2000,
                                    ]}>

                                </Typical>
                            </h1>
                            <span className='profile-role-tagline'>
                                Diverse experience in building full-stack applications.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href='Aayush Thakuri Resume.pdf' download='Aayush Thakuri Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    );
}
