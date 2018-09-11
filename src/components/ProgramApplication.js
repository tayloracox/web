import React, { Component } from 'react'
import cx from 'classnames'
import Link from 'gatsby-link'

const LAST_STEP = 3

class ProgramApplication extends Component {
  state = {
    step: 0,
  }

  continueApplication = event => {
    event.preventDefault()

    if (this.state.step === 0) {
      // Begin application
    }

    if (this.state.step === LAST_STEP) {
      // Complete application
    }

    this.setState({ step: this.state.step + 1 })
  }

  backtrackApplication = event => {
    event.preventDefault()
    this.setState({ step: Math.max(0, this.state.step - 1) })
  }

  render() {
    const { step } = this.state
    return (
      <div className="ProgramApplication">
        <nav className="steps">
          <ol>
            <li className={cx({ complete: step > 0, current: step === 0 })}>
              Contact Information
            </li>
            <li className={cx({ complete: step > 1, current: step === 1 })}>
              Program Start
            </li>
            <li className={cx({ complete: step > 2, current: step === 2 })}>
              Your Background
            </li>
            <li className={cx({ complete: step > 3, current: step === 3 })}>
              Just a Bit More
            </li>
            <li className={cx({ complete: step > 4, current: step === 4 })}>
              All Done!
            </li>
          </ol>
        </nav>
        <form>
          {step === 0 && (
            <section>
              <p>
                Congratulations on making the first step to launch your career
                in coding. Remember, there is no cost to apply or obligation to
                join the program. Filling out the application will get you
                fast-tracked to meet with someone on our team to see if the Web
                Development Program is a good fit for you. This application
                should take 15 to 30 minutes. Please be honest with yourself and
                with us. We’re excited to get to know you!
              </p>
              <fieldset>
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
              </fieldset>
              <p>
                <strong>Notice:</strong> By continuing with this application,
                you are agreeing to the terms of our{' '}
                <Link to="/privacy">Privacy Policy</Link> and{' '}
                <Link to="/terms">Terms of Service</Link>.
              </p>
            </section>
          )}
          {step === 1 && (
            <section>
              <fieldset>
                <h3>When are you hoping to start the program?</h3>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="question_responses[1][a]"
                        value="As soon as the next program is available"
                      />
                      As soon as the next program is available
                    </label>
                  </li>
                </ul>
              </fieldset>
            </section>
          )}
          {step === 2 && (
            <section>
              <p>...</p>
            </section>
          )}
          {step === 3 && (
            <section>
              <p>...</p>
            </section>
          )}
          {step === 4 && (
            <section>
              <h3>Hey, you're all done!</h3>
              <p>
                Thanks for completing this application; that was easy right?
              </p>
              <p>
                Your next step is an interview to get to learn more about the
                program and answer any questions you may have. Please sign up
                for a time to meet with someone from SDG at:
                <br />
                <a href="https://calendly.com/suncoastio/60int">
                  https://calendly.com/suncoastio/60int
                </a>
              </p>
              <p>We'll be in touch&hellip;</p>
            </section>
          )}
          <div className="actions">
            <div className="prev">
              {step > 1 &&
                step < LAST_STEP + 1 && (
                  <button type="submit" onClick={this.backtrackApplication}>
                    Back
                  </button>
                )}
            </div>
            <div className="next">
              {step < LAST_STEP + 1 && (
                <button type="submit" onClick={this.continueApplication}>
                  Continue
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ProgramApplication
