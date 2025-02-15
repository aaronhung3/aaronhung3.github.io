import Header from './header';
import './contact-page.css';

function Contact() {
    return (
        <div className="container">
            <Header />
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="profile-container">
                        <div className="profile-pic">Profile Pic</div>
                        <div className="social-links">Social Links</div>
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
        </div>
    );
}

export default Contact;