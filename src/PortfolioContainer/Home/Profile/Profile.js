import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 
import './Profile.css';

export default function Profile() {
    const [typeEffect] = useTypewriter({
        words: ['Software Engineer', 'Full-Stack Developer', 'Team Player'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
        });
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
                              <span style={{fontWeight: 'bold', marginLeft:'5px'}}>{typeEffect}</span>
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
