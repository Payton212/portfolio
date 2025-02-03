
import COHeaderImage from '../components/IMGS/COHeaderImage.png';
import weatherIMG from '../components/IMGS/weatherIMG.png'

export default function Portfolio() {
    return (
      <div>
    <header>
        
    
            <h1>Payton Schmidt</h1>
          
        
    </header>
            <main>
                <h2>My Projects</h2>
                <div class = "pageTitle">
                <h3>Portfolio</h3>
            </div>


            <section class = "side-bar">
             
                        <h4 id = "link" >like a local</h4>
                            <div id="portDiv">
                                <a id = "img" href = "https://payton212.github.io/like-a-local/index.html ">
                            <img id = "portImg"src={COHeaderImage} alt="Header"/>
                            </a>
                        <p>this is the first working website me and the rest of the members in my group created, i was respondible 
                            for the java and most of the html. the current purpose of this website is to act as a blog for users to store 
                            information about places they visited in certain cities.
                        </p>
                        </div>
                    
            </section>


                    <section class = "side-bar">
                        <h4 id = "link">weather you and I</h4>
                        <div id="portDiv"> <a id = "img" href = "https://weather-you-and-i.onrender.com">
                            <img id ="portImg" src={weatherIMG} alt="Header"/>
                        </a>
                        <p>this is a weather app that fetches data through the weather api and returns you specified
                            weather data based off of that city! 
                            (please give time for the server to restart I only have acces to a free render server 
                            and with inactivity the server stops until the server gets asked to respond)
                        </p>
                    </div>
                    </section> 
        
          </main>
    <footer>  
    </footer>

    </div>
  );
}