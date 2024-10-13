"use client";

import {
  NeutralFace,
  NeutralFaceBold,
  CreatoDisplayLight,
} from "../components/fonts";

export default function Contact() {
  return (
    <>
      <div className={`blocco ${NeutralFace.className}`} id="contact">
        <h1>OUR STORES</h1>
        <div className="contact-container">
          <div className="contact-box">
            <div className="contact-section">
              <p>EMAIL</p>
              <p>kronoshop@gmail.com</p>
            </div>
            <div className="contact-section">
              <p>PHONE</p>
              <p>
                xxxx xxxx xxxx xxxx <br />
                xxxx xxxx xxxx xxxx <br />
                xxxx xxxx xxxx xxxx <br />
                xxxx xxxx xxxx xxxx <br />
              </p>
            </div>
            <div className="contact-section">
              <p>LOCATION</p>
              <p>
                xxxx xxxx xxxx xxxx <br />
                xxxx xxxx xxxx xxxx <br />
                xxxx xxxx xxxx xxxx <br />
                xxxx xxxx xxxx xxxx <br />
              </p>
            </div>
          </div>
          <div className="contact-img">
            <img src="Italy.png" />
          </div>
        </div>
      </div>
    </>
  );
}
