import '../Main.css';
import family1 from '../components/IMGS/family1.jpg';
import family2 from '../components/IMGS/family2.jpg';
import family3 from '../components/IMGS/family3.jpg';
import PicOfMe from '../components/IMGS/PicOfMe.jpeg';
import Treflip from '../components/Videos/treflip.mp4';
import React, { useRef } from 'react';

export default function Home() {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
            
    }
}

    const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  };


    return (
        <>
            <header>
                <h1>Payton Schmidt</h1>
            </header>
            <h2>My Family</h2>
            <div class = "pageTitle">
                <h3>About Me</h3>
            </div>
            <section class='MyFamily'>
                <div id="imageContainer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img id="family4" src={PicOfMe} />
                    <video
                        ref={videoRef}
                        id="treflip"
                        src={Treflip}
                        loop
                    >
                    </video>
                </div>
                <p id = "p"> Picture of Me</p>
            </section>
            <section class='MyFamily'>
                <div id="imageContainer">
                    <img id="family1" src={family1} />
                </div>
                <p id = "p"> this is when we went pennsylvania.</p>
            </section>
            <section class="MyFamily">
                <div id="imageContainer">
                    <img id="family2" src={family2} />
                </div>
                <p id = "p">my beutiful wife and our son Anubis</p>
            </section>
            <section class="MyFamily">
                <div id="imageContainer">
                    <img id="family3" src={family3} />
                </div>
            <p id = "p">before our sushi date!</p>
           </section>
        </>
        
  );
}