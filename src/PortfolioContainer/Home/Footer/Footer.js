import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img 
                    src={ require ("../../../assests/Home/shape-bg.png").default } 
                    alt='not internet connection'/>
            </div>
        </div>
    )
}