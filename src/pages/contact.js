import React from 'react'

const ContactPage = () => (
  <div className="ContactPage">
    <div className="wrap">
      <h2>Contact Us</h2>
      <p>Question? Comments? Just want to chat and say "Hello"?</p>
      <form action="https://formspree.io/hello@suncoast.io" method="POST">
        <input type="hidden" name="_next" value="https://suncoast.io/thanks" />
        <fieldset className="contact">
          <p>
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
          </p>
          <p>
            <label htmlFor="">Email Address</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label htmlFor="">Telephone Number</label>
            <input type="tel" name="phone" />
          </p>
          <p>
            <label htmlFor="">Message</label>
            <textarea name="message" id="" cols="30" rows="10" />
          </p>
        </fieldset>
        <fieldset className="interests">
          <p>I'm interested in:</p>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="Learning web development"
                />
                Learning web development
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="Demo Day & hiring events"
                />
                Demo Day & hiring events
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="Community events"
                />
                Community events
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="Donating or becoming a sponsor"
                />
                Donating or becoming a sponsor
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="interests" value="Volunteering" />
                Volunteering
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="Hiring a developer"
                />
                Hiring a developer
              </label>
            </li>
          </ul>
          <p className="action">
            <button type="submit">Submit</button>
          </p>
        </fieldset>
      </form>
      <div />
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.265942400961!2d-82.665712684848!3d27.770778729308184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e2315c782b2f%3A0xbf19abbc242dcd01!2s2220+Central+Ave%2C+St.+Petersburg%2C+FL+33712!5e0!3m2!1sen!2sus!4v1524147132170"
      width="100%"
      height="450"
      frameBorder="0"
      allowFullScreen
    />
  </div>
)

export default ContactPage
