import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import LogoS from '/Users/adityaarora/reactportfolio/src/assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    
    <>
    <nav>
                <NavLink exact="true" to="/" activeClassName="active">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink  className="about-link" exact="true" to="/about" activeClassName="active">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink className="contact-link" exact="true" to="/contact" activeClassName="active">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

        </nav>
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            
        </Link>
        
        <ul>
            <li>
                <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/aditya-arora-50b294255/"> 
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>

            </li>
            <li>
                <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/aditya-arora-50b294255/"> 
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>

            </li>
            <li>
                <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/aditya-arora-50b294255/"> 
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>

            </li>

            
        </ul>
        


    
    </div>
    </>
    
    
)
export default Sidebar;

