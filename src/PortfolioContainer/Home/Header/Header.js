import React, { useState } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false); // Corrected the state variable name

    const updatedCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) {
            // Add some logic here if needed
        }
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0) {
            // Add some logic here if needed
        }
    };
    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updatedCurrentScreen);

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => (
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        );
    }

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";
        if (index < TOTAL_SCREENS.length - 1) {
            classes += " header-option-separator"; // Added a space before "header-option-separator"
        }

        if (selectedScreen === index) {
            classes += " selected-header-option";
        }
        return classes;
    };

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) {
            // Add some logic here if needed
            return;
        }

        screenComponent.scrollIntoView({ behavior: "smooth" });
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    };

    return (
        <div>
            <div className='header-option' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                    </div>
                    <div className='header-logo'>
                        <span>Aayush</span>
                    </div>
                    <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}
