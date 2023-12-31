import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-logo">
        <p>Contact Me</p>
      </div>
      <div className="detail">
        Please contact me directly at{" "}
        <b>
          <u>abhishek.cse.28@gmail.com </u>
        </b>{" "}
        or through this form.
      </div>
      <div className="form">
        <form action="post">
          <input type="email" className="email" placeholder="Your email" />
          <input type="text" className="message" placeholder="Your message" />
        </form>
      </div>
      <div className="btn">
        <button>Submit</button>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023. Created by ABHISHEK SINGH</p>
      </div>
    </div>
  );
};

export default Footer;
