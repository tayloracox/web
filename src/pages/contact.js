import React from 'react'

const ContactPage = () => (
  <div className="ContactPage">
    <div className="wrap">
      <h2>Contact Us</h2>
      <p>Question? Comments? Just want to chat and say "Hello"?</p>
      <form action="">
        <fieldset>
          <p>
            <label htmlFor="">Name</label>
            <input type="text" />
          </p>
          <p>
            <label htmlFor="">Email Address</label>
            <input type="email" />
          </p>
          <p>
            <label htmlFor="">Telephone Number</label>
            <input type="tel" />
          </p>
          <p>
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" />
          </p>
        </fieldset>
        <fieldset>
          <p>I'm interested in:</p>
          <ul>
            <li>
              <input type="checkbox" /> <label>Learning web development</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Demo Day & hiring events</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Community events</label>
            </li>
            <li>
              <input type="checkbox" />{' '}
              <label>Donating or becoming a sponsor</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Volunteering</label>
            </li>
            <li>
              <input type="checkbox" /> <label>Hiring a developer</label>
            </li>
          </ul>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <div />
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.265942400961!2d-82.665712684848!3d27.770778729308184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e2315c782b2f%3A0xbf19abbc242dcd01!2s2220+Central+Ave%2C+St.+Petersburg%2C+FL+33712!5e0!3m2!1sen!2sus!4v1524147132170"
      width="100%"
      height="450"
      frameBorder="0"
      allowFullscreen
    />
  </div>
)

export default ContactPage
