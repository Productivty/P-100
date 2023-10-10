import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="contact-form" id="contact">
      <h1 className="contact-section-title">Get in Touch</h1>
      <div className="left-side">
        <p className="section-desc">
          Are you looking for a fast-performing and user-friendly website to
          represent your product or business? or looking for any kind of
          consultation? or want to ask questions? or have some advice for me or
          just want to say "Hi 👋" in any case feel free to Let me know. I will
          do my best to respond back. 😊 The quickest way to reach out to me is
          via an email.
        </p>
        <div className="partition">
          <a href="mailto:pradeepthapa236@gmail.com" className="contact-btn">
            PRADEEPTHAPA236@GMAIL.COM
          </a>
          <div className="right-side">
            <SocialIcon
              url="https://twitter.com/home"
              className="social-icon"
            />
            <SocialIcon
              url="https://facebook.com/home"
              className="social-icon"
            />
            <SocialIcon url="https://github.com/home" className="social-icon" />
            <SocialIcon
              url="https://instagram.com/home"
              className="social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
