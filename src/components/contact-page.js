import Header from './header';
import Home from './home-button';
import './contact-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div className="container">
            <Header />
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="profile-container">
                        <div className="profile-pic">Profile Pic</div>
                        <div className="social-links">
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="name-container">
                                <input className="name" type="first-name" placeholder="Name" />
                                <input className="name" type="last-name" placeholder="Name" />
                            </div>
                            <input className="email" type="email" placeholder="Email" />
                            <textarea className="message" placeholder="Message" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Home />
            <script src="https://kit.fontawesome.com/77dfe2fd47.js" crossorigin="anonymous"></script>
        </div>
    );
}

export default Contact;