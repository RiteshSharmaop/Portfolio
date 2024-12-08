import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">

                <h1 className="heading"> <span>contact</span> me </h1>

                <div className="row">

                    <div className="content">

                        <h3 className="title">contact info</h3>

                        <div className="info">

                            <h3>
                            <i class="fas fa-envelope">

                                <FontAwesomeIcon icon={faEnvelope} /> 
                            </i>
                                connectwithritesh07@gmail.com
                            </h3>
                            <h3>
                            <i class="fas fa-phone">
                                <FontAwesomeIcon icon={faPhone} />

                            </i>
                                 +91 9669844902
                            </h3>
                            <h3>
                            <i class="fas fa-map-marker-alt">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> 

                            </i>
                                Bhopal, India - 462043
                            </h3>
                        </div>

                    </div>

                    <form action="POST">

                        <input type="text" placeholder="name" className="box" />
                        <input type="email" placeholder="email" className="box" />
                        <input type="number" placeholder="phone number" className="box" />

                        <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                        <p> &#160;</p>
                        <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

                    </form>

                </div>


            </section>

        </div>
    );
}

export default Contact