import React, { Component } from 'react'
import banner from '../../images/banner.svg'
import PageHeading from '../../components/PageHeading'
import AcademyNavigation from '../../components/AcademyNavigation'

class DiversityScholarship extends Component {
  render() {
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
                offer a $2,000 scholarship to members of communities that are
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
                  We will deduct the scholarship amount ($2,000) from the total
                  cost of tuition.
                </li>
              </ul>
            </div>
            <form className="form">
              <fieldset className="primary-fields">
                <p>
                  <label>Full Name</label>
                  <input type="text" name="full_name" />
                </p>
                <p>
                  <label>Email</label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="tel" name="phone" />
                </p>
              </fieldset>
              <fieldset className="secondary-fields">
                <p className="confirm">
                  <label>
                    <input type="checkbox" />
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
                  <textarea />
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
