import React from "react";
import Profile from "./Profile/Profile";
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import './Home.css';

export default function Home() {
    return (
        <div className='home-containter'>
            <Header></Header>
            <Profile></Profile>
            {/* <Footer></Footer> */}
        </div>
    );
}