import { useEffect } from "react";
import Header from "../../Shared/Header";
import { contact_data } from "./Contact.data";

const Contact = () => {

    const {iframe, email} = contact_data;

    const MapBox = () => {
        return (
            <section className="mapbox" data-mapbox>
                <figure>
                    {iframe}
                </figure>
            </section>
        )
    }

    const ContactForm = () => {

        useEffect(() => {
            const form = document.querySelector("[data-form]");
            const formInputs = document.querySelectorAll("[data-form-input]");
            const formBtn = document.querySelector("[data-form-btn]");

            formInputs.forEach(formInput => {
                formInput.addEventListener("input", () => {
                    form.checkValidity() ? formBtn.removeAttribute("disabled") : formBtn.setAttribute("disabled", "");
                });
            });
        })

        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const entries = Object.fromEntries(formData);
            window.open(`mailto:${email}?subject=Message from Brian's Personal Website - Sender: ${entries.firstname} ${entries.lastname}&body=${entries.message}`)
        }

        return (
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form onSubmit={handleSubmit} className="form" data-form>
                    <div className="input-wrapper">
                        <input type="text" name="firstname" className="form-input" placeholder="First Name" required data-form-input />
                        <input type="text" name="lastname" className="form-input" placeholder="Last Name" required data-form-input />
                    </div>
                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        )
    }
    return (

        <article className="contact" data-page="contact">

            <Header title="Contact" ></Header>
            <MapBox></MapBox>
            <ContactForm></ContactForm>

        </article>
    )
}

export default Contact;