import React from 'react';
// custom components
import MyAvatar from "./MyAvatar";
import IntroText from "./IntroText";
// media
import myName from '../../assets/sound-name.mp3';

const HomePage = () => {
    const playName = () => {
        const audioElement = document.getElementsByClassName("my-name")[0]
        audioElement.play()
    }
    return (
        <div>
            <MyAvatar/>
            <IntroText playName={playName}/>
            <audio className='my-name'>
                <source src={myName} type='audio/mpeg'></source>
            </audio>
        </div>
    )
}

export default HomePage;