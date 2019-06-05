import React from 'react'
import { navigate } from 'gatsby'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'
import AcademyNavigation from '../../components/academy/AcademyNavigation'

const GATEWAY_API_URL = process.env.GATSBY_GATEWAY_API_URL

class DiversityScholarship extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    applied: false,
    essay: '',
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
    fetch(`${GATEWAY_API_URL}/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        program: 'diversity-scholarship',
        full_name: this.state.name,
        email_address: this.state.email,
        phone_number: this.state.phone,
        application_status: 'complete',
        question_responses: {
          'I have applied for a program at the Academy at Suncoast Developers Guild.': this
            .state.applied,
          'Why is diversity in technology important to you?': this.state.essay,
        },
      }),
    }).then(() => {
      if (window.ga) {
        ga('send', 'event', {
          eventCategory: 'Program Applications',
          eventAction: 'Submit',
          eventLabel: 'Diversity Scholarship',
        })
      }
      navigate('/thanks')
    })
  }

  render() {
    return (
      <Layout>
        <AcademyNavigation />
        <Section>
          <Container>
            <PageTitle>Application for Diversity Scholarship</PageTitle>
            <div className="content">
              <p>
                <strong>Suncoast Developers Guild</strong> seeks to narrow the
                gaps in our industry by introducing local companies to diverse
                talent. We offer a scholarship of <strong>$1,900</strong> to
                members of communities that are underrepresented in technology.
              </p>
              <ul>
                <li>
                  This opportunity is available, <em>but not limited to</em>:
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
            <form onSubmit={this._submit}>
              <div className="field">
                <label className="label">Full Name</label>
                <div className="control">
                  <input
                    type="text"
                    name="name"
                    className="input"
                    value={this.state.name}
                    onChange={this._update}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="email"
                    name="email"
                    className="input"
                    value={this.state.email}
                    onChange={this._update}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="control">
                  <input
                    type="tel"
                    name="phone"
                    className="input"
                    value={this.state.phone}
                    onChange={this._update}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="radio">
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
                </div>
              </div>
              <div className="field">
                <label className="label">
                  Why is diversity in technology important to <em>you</em>?
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="essay"
                    value={this.state.essay}
                    onChange={this._update}
                  />
                </div>
              </div>
              <div className="field">
                <p>
                  <strong>Notice:</strong> By submitting this application, you
                  are agreeing to our <Link to="/privacy">Privacy Policy</Link>{' '}
                  and <Link to="/terms">Terms of Service</Link>.
                </p>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </Section>
        <section className="hero is-info is-bold">
          <div className="hero-body">
            <Container>
              <div className="testimonial">
                <blockquote>
                  It honestly made me feel valued and wanted. Knowing that there
                  was an extra effort to include women and other minorities
                  within the field made me want to be involved even more. Also,
                  it was kind of surprising to me to be included within
                  diversity. So often, women aren’t included or considered to be
                  a part of making something diverse. People tend to think more
                  about race in that case. Knowing that it was being recognized
                  that women don’t have the same advantages within tech and that
                  an organization was focused on improving that issue meant a
                  lot to me.
                </blockquote>
                <p className="has-text-weight-bold has-text-right">
                  &mdash; Taylor Cox
                </p>
              </div>
            </Container>
          </div>
        </section>
      </Layout>
    )
  }
}

export default DiversityScholarship
