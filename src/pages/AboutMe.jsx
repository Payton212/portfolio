import "../Main.css";
import littleBaby from "../components/IMGS/littleBaby.jpg";
import family2 from "../components/IMGS/kickingWithMoMo.jpg";
import family3 from "../components/IMGS/BigOllie.jpg";
import PicOfMe from "../components/IMGS/PicOfMe.jpg";
import Treflip from "../components/Videos/treflip.mp4";
import BigBaby from "../components/Videos/babyRunning.mp4";
import MoMo from "../components/Videos/hikingWithMoMo.mp4";
import bigOllie from "../components/Videos/bigOllie.mp4";
import Line from "../components/Videos/Line.mp4";
import sponsored from "../components/IMGS/Sponsored.jpg";
import { useRef } from "react";

export default function Home() {
  const videoRefs = useRef([]);

  const videoData = [
    { id: 0, src: Treflip },
    { id: 1, src: BigBaby },
    { id: 2, src: MoMo },
    { id: 4, src: bigOllie },
    { id: 4, src: Line}
  ];

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };
  return (
    <>
      <h2>My Family</h2>
      <div className="pageTitle">
        <h3>About Me</h3>
      </div>
      <section className="MyFamily">
        <div
          id="imageContainer1"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <img id="family4" src={PicOfMe} />
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            id="treflip"
            src={videoData[0].src}
            loop
          />
        </div>
        <p id="p">Originally from Texas, I travelled for three months and ended up in Colorado. It's been two years since, and I love it here. I've been a skater for 9 years. I also snowboard and overall enjoy the outdoors. I'm currently enrolled in Denver University learning to code. Finding the right balance for my schoolwork and job can be difficult at times, but I'm determined to achieve what I set my mind to.  </p>
      </section>
      <section className="MyFamily">
        <div
          id="imageContainer2"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <img id="family1" src={littleBaby} />
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            id="snowBaby"
            src={videoData[1].src}
            loop
          />
        </div>
        <p id="p">This lil guy's name is Baby. He's been with me for 5 years. He's crossed state lines with me and comes along everytime I skate. Baby's very friendly and loves other People and animals although his curiosity sometimes gets the better of him. </p>
      </section>
      <section className="MyFamily">
        <div id="imageContainer3"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <img id="family2" src={family2} />
          <video
            ref={(el) => (videoRefs.current[2] = el)}
            id="hiking"
            src={videoData[2].src}
            loop
          />
        </div>
        <p id="p">This is my fiance and brother in law When we hiked in Rocky Mountain National Park. My fiance and I go hiking quite often and she's always happy to join me on my adventures. We met almost 2 years ago and have been inseperable ever since she's always pushing me to better myself and is a big reason I am where I am today and will hopefully be working for your company! </p>
      </section>
      <section className="MyFamily">
        <div id="imageContainer4"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <img id="family3" src={family3} />
          <video
            ref={(el) => (videoRefs.current[3] = el)}
            id="ollie"
            src={videoData[3].src}
            loop
          />
        </div>
        <p id="p">I first started skating 9 years ago and for a long time there was nothing that gave me as big of a sense of accomplishment as skating did. There have been close seconds like snowboarding and working on cars, but nothing has grabbed me the way web design has I love the idea of displaying whatever I wanted to on a computer in any way I wanted I have aquired the same dedication I have for skateboarding and would love to bring your company as high as I got In this ollie. </p>
      </section>
       <section className="MyFamily">
        <div id="imageContainer5"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          <img id="family4" src={sponsored} />
          <video
            ref={(el) => (videoRefs.current[4] = el)}
            id="line"
            src={videoData[4].src}
            loop
          />
        </div>
        <p id="p">There haven't been a whole lot of personal accomplishments in my life but one big one has to be getting recognized by a skateboard company out of las vegas. Named Rad Rip it wasn't very much but I was given free boards every month to help cut the cost of the sport. since then my greatest accomplishment has been my fiance and I'd like my next to be securing a career in Web design! </p>
      </section>
    </>
  );
}
