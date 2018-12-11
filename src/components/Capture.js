import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const INITIAL_STATE = {
  givenName: '',
  familyName: '',
  email: '',
}

class Capture extends React.Component {
  state = INITIAL_STATE

  constructor() {
    super()
    this.formRef = React.createRef()
  }

  _change = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  _submit = event => {
    event.preventDefault()
    const { elements } = this.formRef.current
    if (!elements.contactMeOnlyByCarrierPigeon.checked) {
      fetch('https://gateway.suncoast.io/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          source: 'mailing-list',
          ...this.state,
        }),
      }).then(() => {
        this.setState(INITIAL_STATE)
        navigateTo('/thanks')
      })
    }
  }

  render() {
    return (
      <section className="Capture">
        <section className="Mail">
          <h2>Keep in Touch</h2>
          <p>Stay up to date with our latest news and upcoming events.</p>
          <form onSubmit={this._submit} ref={this.formRef}>
            <fieldset>
              <div className="group">
                <p>
                  <label htmlFor="givenName">First Name</label>
                  <input
                    type="text"
                    name="givenName"
                    onChange={this._change}
                    value={this.state.givenName}
                  />
                </p>
                <p>
                  <label htmlFor="familyName">Last Name</label>
                  <input
                    type="text"
                    name="familyName"
                    onChange={this._change}
                    value={this.state.familyName}
                  />
                </p>
              </div>
            </fieldset>
            <fieldset>
              <p>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  onChange={this._change}
                  value={this.state.email}
                />
              </p>
            </fieldset>
            <input
              type="checkbox"
              name="contactMeOnlyByCarrierPigeon"
              value="1"
              tabIndex="-1"
              autoComplete="off"
            />
            <p className="note">
              By sharing your email address, you agree to our{' '}
              <Link to="/privacy">Privacy Policy</Link> and{' '}
              <Link to="/terms">Terms of Service</Link>.
            </p>
            <p className="action">
              <button className="cta-button" onClick={this._submit}>
                Sign Up Now
              </button>
            </p>
          </form>
        </section>
        <section className="Tour">
          <h2>Take a Tour</h2>
          <p>
            Come visit our campus and see what we're all about. Tours are every
            Friday at 12:00 p.m.
          </p>
          <p className="action">
            <OutboundLink
              className="cta-button"
              target="_blank"
              rel="noopener"
              href="https://www.eventbrite.com/e/campus-tour-tickets-53318845101"
            >
              RSVP Today
            </OutboundLink>
          </p>
        </section>
      </section>
    )
  }
}

export default Capture
