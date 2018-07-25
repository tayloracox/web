import React from 'react'
import PageHeading from '../components/PageHeading'

const ContactPage = () => (
  <div className="ContactPage">
    <div className="wrap">
      <PageHeading>Contact Us</PageHeading>
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
  </div>
)

export default ContactPage
