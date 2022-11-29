import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <p>
                <> Made by brandonmai137 </>
                <a href="https://github.com/brandonmai137"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            </p>
        </div>

    )
}

export default Footer;