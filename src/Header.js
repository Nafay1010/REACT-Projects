import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { mypic } from './images/Mypic.png';

const Header = () => {
    return ( 
        <div className="Header">
            {/* <img src="https://via.placeholder.com/317x317" alt="" /> */}
            {/* <img src={mypic} alt="" /> */}
            <img src={require('./images/Mypic.png')} height= {317} width={317}/>
            <div className="white-bg">
                    <h1>Abdul Nafay</h1>
                    <h3>Frontend Developer</h3>
                    <p>abdulnafay.website</p>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                    <button className='Email'><FontAwesomeIcon icon={faEnvelope} className="email"/> Email </button>
                    </a>
                    <a href="https://www.linkedin.com/feed/">
                    <button className='Linkedin'><FontAwesomeIcon icon={faLinkedin} className="linkedin"/> LinkedIn</button>
                    </a>
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}   
            </div>
        </div>
     );
}
export default Header;