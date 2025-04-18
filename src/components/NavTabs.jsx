import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav nav-tabs" id = "nav-tab">
    
      <a className="nav-item" >
        <Link id="nav-item"
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'active' : 'nav-link'}
        >
          About Me
        </Link>
      </a>
      <a className="nav-item">
        <Link id="nav-item"
          to="/portfolio"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/portfolio' ? 'active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </a>
      <a className="nav-item">
        <Link id="nav-item"
          to="/Contact"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'active' : 'nav-link'}
        >
          Contact Me
        </Link>
      </a>
       <a className="nav-item">
        <Link id="nav-item"
          to="/resume"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/resume' ? 'active' : 'nav-link'}
        >
          Resume
        </Link>
      </a>
       
    
    </div>
  );
}

export default NavTabs;