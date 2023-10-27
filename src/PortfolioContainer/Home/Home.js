import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import './Home.css';

export default function Home() {
    return (
        <div className='home-containter'>
            <Profile></Profile>
            {/* <Footer></Footer> */}
        </div>
    );
}