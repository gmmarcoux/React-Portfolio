import { contactMe } from "../../portfolio";
import "./contactMe.css";

const contactMe = () => {
    if (!contactMe.email) return null
    
    return (
        <div className="contact section">
            <h2 className="contactTitle">Contact Me!</h2>
            <a href={'mailto:${contact.email}'}>
                <span>
                    Send me an email!
                </span>
            </a>
        </div>
    )
}




export default contactMe