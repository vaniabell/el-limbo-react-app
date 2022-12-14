import {Link,NavLink} from 'react-router-dom';
function NavBar() {
    return ( 
        
        <div className="w3-top">
        <div className="w3-row w3-padding w3-black">
          <div className="w3-col s3">
            <a href="#" className="w3-button w3-block w3-black">
              HOME
            </a>
          </div>
          <div className="w3-col s3">
            <a href="#about" className="w3-button w3-block w3-black">
              ABOUT
            </a>
          </div>
          <div className="w3-col s3">
            <Link className="w3-button w3-block w3-black" to="/menu">
              MENU
            </Link>
          </div>
          <div className="w3-col s3">
            <a href="#where" className="w3-button w3-block w3-black">
              WHERE
            </a>
          </div>
        </div>
        {/* Links (sit on top) */}
      </div>
     );
}

export default NavBar;