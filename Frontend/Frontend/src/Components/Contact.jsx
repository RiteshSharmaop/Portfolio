import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">

                <h1 className="heading"> contact<span> me </span> </h1>

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

                    <form action="https://portfolio-4qm8.vercel.app/c/contact" method="POST">
                    
                        <input type="text" id="name" name="name" placeholder="name" className="box" />
                        <input type="email"  id="email" name="email"placeholder="email" className="box" />
                        <input type="number" id="number" name="number" placeholder="number" className="box" />

                        <textarea name="message" id="messsage" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                        <p> &#160;</p>
                        <button type="submit" onClick={(e)=> e.preventDefault()} className="btn"> send <i className="fas fa-paper-plane"></i> </button>

                    </form>

                </div>


            </section>

        </div>
    );
}

export default Contact
