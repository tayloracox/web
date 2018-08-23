import React from 'react'
import PageHeading from '../components/PageHeading'

const ContactPage = () => (
  <div className="ContactPage">
    <div className="wrap">
      <PageHeading>Contact Us</PageHeading>
      <p>Question? Comments? Just want to chat and say "Hello"?</p>
      <form
        action="https://app.nutshell.com/api/v1/public/lead/289162:17c8389f0262460d66b7c94e0902f3eb45bc56ca"
        method="POST"
      >
        <input
          type="hidden"
          name="successUrl"
          value="https://suncoast.io/thanks"
        />
        <fieldset className="contact">
          <p>
            <label htmlFor="">Name</label>
            <input type="text" name="contact[name]" />
          </p>
          <p>
            <label htmlFor="">Email Address</label>
            <input type="email" name="contact[email]" />
          </p>
          <p>
            <label htmlFor="">Telephone Number</label>
            <input type="tel" name="contact[phone]" />
          </p>
          <p>
            <label htmlFor="">Message</label>
            <textarea name="note" id="" cols="30" rows="10" />
          </p>
        </fieldset>
        <fieldset className="interests">
          <p>Are you interested in:</p>
          <ul>
            <li>Learning web development?</li>
            <li>Demo Day & hiring events?</li>
            <li>Community events?</li>
            <li>Donating or becoming a sponsor?</li>
            <li>Volunteering?</li>
            <li>Hiring a developer?</li>
          </ul>
          <p>Let us know!</p>
          <p className="action">
            <button type="submit">Submit</button>
          </p>
        </fieldset>
      </form>
      <div />
    </div>
  </div>
)

export default ContactPage
