import React from 'react'
import Link from 'gatsby-link'
import Tab from '../../components/Tab'
import Icon from '../../components/Icon'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'
import update from 'immutability-helper'

const INITIAL_CONTACT_STATE = {
  givenName: '',
  familyName: '',
  email: '',
  phone: '',
}

class CatalogPage extends React.Component {
  state = {
    captured: false,
    contact: INITIAL_CONTACT_STATE,
  }

  constructor() {
    super()
    this.formRef = React.createRef()
  }

  componentDidMount() {
    if (window.localStorage.getItem('catalog-captured')) {
      this.setState({ captured: true })
    }
  }

  _change = event => {
    this.setState({
      contact: update(this.state.contact, {
        [event.target.name]: { $set: event.target.value },
      }),
    })
  }

  _capture = event => {
    event.preventDefault()
    const { elements } = this.formRef.current
    if (!elements.contactMeOnlyByCarrierPigeon.checked) {
      fetch('https://gateway.suncoast.io/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          source: 'catalog',
          ...this.state.contact,
        }),
      }).then(() => {
        this.setState({
          contact: INITIAL_CONTACT_STATE,
        })
      })
    }
    this.setState({ captured: true })
    window.localStorage.setItem('catalog-captured', 'true')
  }

  render() {
    return (
      <div className="AcademyPage Catalog">
        <AcademyNavigation />
        <div className="wrap">
          <PageHeading>Download our Program Catalog</PageHeading>
          <ul className="tabs">
            <Tab to="/academy">Our Curriculum</Tab>
            <Tab to="/academy/catalog">Program Catalog</Tab>
            <Tab to="/academy/schedule">Daily Schedule</Tab>
            <Tab to="/academy/career">Career Services</Tab>
          </ul>
          {this.state.captured ? (
            <section className="Download">
              <p>
                Thanks for your interest in our immersive Web Development
                Program! Inside our program catalog, you'll find important
                information about our program and the admissions process.
              </p>
              <p class="download">
                <a href="/catalog.pdf" className="cta-button">
                  <Icon name="catalog" />
                  Download Catalog
                </a>
              </p>
            </section>
          ) : (
            <section className="Capture">
              <p>
                Thanks for your interest in our immersive Web Development
                Program. As you dig deeper into our program catalog and
                curriculum, we'd love to chat with you about it.
              </p>
              <form onSubmit={this._capture} ref={this.formRef}>
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
                  <div className="group">
                    <p>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        onChange={this._change}
                        value={this.state.email}
                      />
                    </p>
                    <p>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        onChange={this._change}
                        value={this.state.phone}
                      />
                    </p>
                  </div>
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
                  <button className="cta-button" onClick={this._capture}>
                    Go to Download
                  </button>
                </p>
              </form>
            </section>
          )}
        </div>
      </div>
    )
  }
}

export default CatalogPage
