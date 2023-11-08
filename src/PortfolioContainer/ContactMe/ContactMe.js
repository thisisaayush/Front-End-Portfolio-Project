import React, {useState} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

export default function ContactMe(props) {

    const [typeEffect] = useTypewriter({
        words: ['Get In Touch ', 'Email Me', 'Add me on LinkedIn'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
        });

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    console.log(name);

    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading
             subHeading={'Lets Keep In Touch '}
             title={'Contact Me'}/>
             <div className='central-form'>
                <div className='col'>
                <h2 className='title'>
                    {" "}
                    <span style={{fontWeight: 'bold', marginLeft:'5px'}}>{typeEffect}</span>
                </h2>
                <a href='https://www.linkedin.com/in/thisisaayushthakuri/'>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href='#'>
                    <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                </a>
                <a href='https://github.com/thisisaayush'>
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <h4> Send Your Email Here!</h4>
                        <img src={imgBack} alt='image not found'/>
                    </div>
                    <form>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text'
                         onChange={handleName}
                         value={name}
                        />

                        <label htmlFor='email'>Email</label>
                        <input type='email'
                         onChange={handleEmail}
                         value={email}
                        />

                        <label htmlFor='message'>Message</label>
                        <textarea type='text'
                         onChange={handleMessage}
                         value={message}
                        />

                        <div className='send-btn'>
                            <button type='submit'>
                                send <i class="fa fa-paper-plane"/>
                            </button>
                        </div>
                    </form>
                </div>
             </div>
        </div>
    )
}