
import COHeaderImage from '../components/IMGS/COHeaderImage.png';
import weatherIMG from '../components/IMGS/weatherIMG.png'
import employMee from "../components/IMGS/employMee.png";
import Github from "../components/IMGS/github-logo.png";
import Youtube from "../components/IMGS/youtube.png";
import CandidateSearch from "../components/IMGS/CandidateSearch.jpg";
import ASocialAPI from "../components/IMGS/ASocialAPI.jpg";
import myOnlineLibrary from "../components/IMGS/myOnlineLibrary.jpeg";
import PocketMechanic from "../components/IMGS/pocketMechanic.jpg";

export default function Portfolio() {
    return (
      <div>
   
            <main>
                <h2>My Projects</h2>
                <div className = "pageTitle">
                <h3>Portfolio</h3>
            </div>


            <section className = "side-bar">
             
                        <h4 id = "link" >My Online Library</h4>
                            <div id="portDiv">
                                <a id = "img" href = "https://myonlinelibrary.onrender.com">
                            <img id = "portImg"src={myOnlineLibrary} alt="Header"/>
                            </a>
                        <p id="portP">This is an application that uses graphQL with MongoDB to
                            allow a user to SignUp, LogIn, Save, and DeleteBooks. this application displays a book with an Image,
                            description, title, and authors. please be aware that the application is deployed on render using the free
                            service and may need time to reDeploy if there has been inactivity to too long.
                        </p>
                        </div>
                    
                </section>
                <section className="side-bar">
             
                        <h4 id = "link" >Pocket Mechanic</h4>
                            <div id="portDiv">
                                <a id = "img" href = "https://pocketmechanic.onrender.com/">
                            <img id = "portImg"src={PocketMechanic} alt="Header"/>
                            </a>
                        <p id="portP"> This is Pocket-Mechanic is a site much like Upwork geared towards normal people that 
                            don't know all there is to know about cars. When the site is complete you will be able to take pictures if applicable
                            a description and the budget, if a contractor thinks they can fix the issue within your budget. As of april 24th 2025 the 
                            back end is fully functional and uses graphQl for the back end, and uses JWT to allow users to sign up create posts and contractors can do the same! 
                            The application uses React typeScript for the front end and is fully responsive!
                        </p>
                        </div>
                    
            </section>
                


            <section className = "side-bar">
                        <h4 id = "link">weather you and I</h4>
                    <div id="portDiv"> <a id = "img" href = "https://weather-you-and-i.onrender.com">
                            <img id ="portImg" src={weatherIMG} alt="Header"/>
                        </a>
                        <p id="portP">This is a weather app that fetches data through the weather api and returns you specified
                            weather data based off of that city! 
                            (please give time for the server to restart I only have acces to a free render server 
                            and with inactivity the server stops until the server gets asked to respond)
                        </p>
                </div>
            </section> 
                <section className="side-bar">
                    <h4 id="link"> EmployMee</h4>
                    <div id="portDiv">
                            <section className="portImageContainer">
                        <img id="githubLink" src={employMee}/>
                            <a id="employMeeA" href="https://github.com/Payton212/employMee">
                                <img id="innerImg" src={Github} />
                            </a> 
                            <a href="https://youtu.be/Oq6G7ZnaNhY?si=bX5xTOk8LZX2VY8i">
                                <img id="youtubeImg" src={Youtube} />
                            </a>
                             <p id="employMeeText"> ⬅ Feel free to fork this repo and see how it works!</p>
                            <p id="youtubeText"> ⬅ Feel free to watch a demonstration instead of forking the repo! </p>
                            </section>
                   
                    <p id="portP">This project showcases my knowledge of SQL and of creating database infrustructure this project can be seen if you fork the repository, or if you would like to see the project and don't want to or cannot fork the repo feel free to watch the demonstration video!</p></div>
                </section>    
                <section className = "side-bar">
             
                        <h4 id = "link" >Candidate Search</h4>
                            <div id="portDiv">
                                <a id = "img" href = "https://find-my-employee.netlify.app/">
                            <img id = "portImg"src={CandidateSearch} alt="Header"/>
                            </a>
                        <p id="portP">
                            This Project Uses the public Github API to search for candidates and display them on the home page fom there you can either delete the Candidate or save them to the saved candidates page where you can view them later. On the savedCandidates Page you can then decide to delete them. 
                        </p>
                        </div>
                    
                </section>
                
               
                <section className="side-bar">
                    <h4 id="link"> ASocialAPI</h4>
                    <div id="portDiv">
                            <section className="portImageContainer">
                        <img id="githubLink" src={ASocialAPI}/>
                            <a id="employMeeA" href="https://github.com/Payton212/ASocialAPI">
                                <img id="innerImg" src={Github} />
                            </a> 
                            <a href="https://youtu.be/oIAuHUgMT2k?si=kp5a9EAYA1euqaSC">
                                <img id="youtubeImg" src={Youtube} />
                            </a>
                             <p id="employMeeText"> ⬅ Feel free to fork this repo and see how it works! </p>
                            <p id="youtubeText"> ⬅ Feel free to watch a demonstration instead of forking the repo! </p>
                            </section>
                   
                    <p id="portP">So this is a social media API that works with mongoDB that you could use with a front end of your making to create a fully functional social media website!!!  </p></div>
                </section>    
                <section className="side-bar">
             
                        <h4 id = "link" >like a local</h4>
                            <div id="portDiv">
                                <a id = "img" href = "https://payton212.github.io/like-a-local/index.html ">
                            <img id = "portImg"src={COHeaderImage} alt="Header"/>
                            </a>
                        <p id="portP">This is the first working website me and the rest of the members in my group created, i was respondible 
                            for the java and most of the html. the current purpose of this website is to act as a blog for users to store 
                            information about places they visited in certain cities.
                        </p>
                        </div>
                    
            </section>
        
          </main>
    <footer>  
    </footer>

    </div>
  );
}