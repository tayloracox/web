import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import config from '../../../gatsby-config'
import banner from '../../images/banner.svg'
import PageHeading from '../../components/PageHeading'
import AcademyNavigation from '../../components/AcademyNavigation'

const GATEWAY_API_URL = config.siteMetadata.apis.gateway

class DiversityScholarship extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    applied: false,
    essay: '',
    complete: false,
  }

  _update = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  _submit = event => {
    event.preventDefault()
    fetch(GATEWAY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        program: 'diversity_scholarship',
        full_name: this.state.name,
        email_address: this.state.email,
        phone_number: this.state.phone,
        question_responses: {
          'I have applied for a program at the Academy at Suncoast Developers Guild.': this
            .state.applied,
          'Why is diversity in technology important to you?': this.state.essay,
        },
      }),
    }).then(() => {
      this.setState({ complete: true })
    })
  }

  render() {
    if (this.state.complete) {
      return <Redirect to="/thanks" />
    }
    return (
      <div className="AcademyPage DiversityScholarship">
        <AcademyNavigation />
        <div className="wrap">
          <PageHeading>Application for Diversity Scholarship</PageHeading>
          <main className="app-main">
            <div className="intro">
              <p>
                Suncoast Developers Guild seeks to narrow the gaps in our
                industry by introducing local companies to diverse talent. We
                offer a scholarship of $1,900 to members of communities that are
                underrepresented in technology.
              </p>
              <ul>
                <li>
                  This opportunity is available, but not limited to:
                  self-identifying women, people of color, individuals with
                  disabilities, and the LGBTQ community. Members of all
                  underrepresented groups may apply for this scholarship.
                </li>
                <li>
                  We will deduct the scholarship amount ($1,900) from the total
                  cost of tuition.
                </li>
              </ul>
            </div>
            <form className="form" onSubmit={this._submit}>
              <fieldset className="primary-fields">
                <p>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this._update}
                  />
                </p>
                <p>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this._update}
                  />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={this.state.phone}
                    onChange={this._update}
                  />
                </p>
              </fieldset>
              <fieldset className="secondary-fields">
                <p className="confirm">
                  <label>
                    <input
                      type="checkbox"
                      name="applied"
                      checked={this.state.applied}
                      onChange={this._update}
                    />
                    <span>
                      I have applied for a program at the{' '}
                      <strong>Academy at Suncoast Developers Guild</strong>.
                    </span>
                  </label>
                </p>
                <p className="essay">
                  <label>
                    Why is diversity in technology important to <em>you</em>?
                  </label>
                  <textarea
                    name="essay"
                    value={this.state.essay}
                    onChange={this._update}
                  />
                </p>
              </fieldset>
              <p className="notice">
                <strong>Notice:</strong> By submitting this application, you are
                agreeing to our{' '}
                <a href="https://suncoast.io/privacy">Privacy Policy</a> and{' '}
                <a href="https://suncoast.io/terms">Terms of Service</a>.
              </p>
              <p className="actions">
                <button type="submit">Submit</button>
              </p>
            </form>
          </main>
        </div>
      </div>
    )
  }
}

export default DiversityScholarship
