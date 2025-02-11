import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Github from './components/IMGS/github-logo.png';
import LinkedIn from './components/IMGS/linkedin.png';
import instagram from './components/IMGS/instagram.png';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
       <header>
        
    
            <h1>Payton Schmidt</h1>
          
        
    </header><Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <div class="footer">
          <a  href="https://github.com/Payton212"><img id="github" src={Github}></img> </a>
          <a  href="www.linkedin.com/in/payton-schmidt-a77b0a28a"><img id="linkedIn" src={LinkedIn}></img></a>
          <a  href="https://www.instagram.com/the_schmitty_skater/"><img id="instagram" src={instagram}></img></a>
        </div>
      </footer>
    </>
  );
}

export default App;