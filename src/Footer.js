import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <div className="footer">
            <a href="https://twitter.com/home">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="Twitter"/>
            </a>
            <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="FB"/>
            </a>
            <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="Insta"/>
            </a>
            <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithubSquare} size="2x" className="Github"/>
            </a>
        </div>
     );
}
 
export default Footer;
<div className="footer">

</div>