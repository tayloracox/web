import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Icon from '../components/Icon'
import Engagement from '../components/Engagement'
import Capture from '../components/Capture'
import logoBanner from '../images/banner.svg'
import swagIllustration from '../images/swag.svg'
import logoJunior from '../images/junior.svg'

const IndexPage = () => (
  <div className="IndexPage">
    <div className="Splash">
      <img src={logoBanner} alt="Suncoast Developers Guild" height="280" />
    </div>
    <div className="Duo">
      <div className="Academy">
        <aside>
          <h2>Academy</h2>
          <h3>Learn to code with us.</h3>
          <h3>
            We are now enrolling for our January 28
            <sup>th</sup> cohort!
          </h3>
          <p>
            The <strong>Academy at Suncoast Developers Guild</strong> is a code
            school that serves <em>people</em>, not profit. We are changing
            lives and teaching people to be the best software developers they
            can be.
          </p>
          <p className="cta">
            <Link to="/academy">Find out more</Link>
            <Link to="/academy/apply">Apply now</Link>
          </p>
        </aside>
      </div>
      <div className="Community">
        <aside>
          <h2>Community</h2>
          <h3>
            We are a collective of software engineers, programmers, and
            designers in Tampa Bay.
          </h3>
          <p>
            With thousands of members across dozens of local groups, our members
            touch all aspects of technology development across Tampa Bay.
          </p>
          <p className="cta">
            <Link to="/community">Explore our community</Link>
            <OutboundLink href="https://join.slack.com/t/suncoast-devs/shared_invite/enQtMzE1NzYyNjM3NzE1LTUwYmJiZmQwNzMwOTJlMTczMzQ4ODdiYmE5NDJiMDgwOGY2ODRmNDIxNTIzMGQ1ZmI3OTEwYmVjZmU3YzYzZjY">
              Join us on Slack <Icon name="slack" />
            </OutboundLink>
          </p>
        </aside>
      </div>
    </div>
    <div className="Organization">
      <aside>
        <h2>Our Organization</h2>
        <p>
          Our mission is to provide those seeking an education in software
          development with the technical and soft skills they need to pursue
          rewarding careers as programmers. We also seek to promote a sense of
          community among local technology organizations, supporting members in
          a way that strengthens our community and promotes the common good.
        </p>
        {/* <nav>
          <span className="active">Mission</span>
          <span>Vision</span>
          <span>Values</span>
        </nav> */}
      </aside>
    </div>

    <section className="Yolo">
      <div className="Junior">
        <img src={logoJunior} alt="SDG Jr Logo" width="120" />
        <aside>
          <p>Do you want to know about our free kids classes?</p>
          <p className="cta">
            <Link to="/jr">Yes, I do!</Link>
          </p>
        </aside>
      </div>
      <div className="Swag">
        <img
          src={swagIllustration}
          alt="An illustration of a t-shirt and some stickers"
          width="170"
        />
        <aside>
          <p>Get shirts, stickers and other stunning swag from our store.</p>
          <p className="cta">
            <OutboundLink href="http://store.suncoast.io/">
              Shop now
            </OutboundLink>
          </p>
        </aside>
      </div>
    </section>

    <section className="Engage">
      <h2 id="getting-involved">Getting Involved</h2>

      <div className="ways">
        <Engagement title="Engage" link="/community" label="Join Us">
          Checkout an event, or chat with us on our public Slack.
        </Engagement>

        <Engagement title="Volunteer" link="/volunteer" label="Sign Up">
          Help us by mentoring the next generation of software engineers.
        </Engagement>

        <Engagement title="Hire" link="/academy/success" label="Meet Alumni">
          See which of our highly sought-after graduates might be a fit for your
          company.
        </Engagement>

        <Engagement
          title="Donate"
          link="http://store.suncoast.io/"
          label="Give Today"
        >
          Every dollar helps us fulfill our mission.
        </Engagement>

        <Engagement title="Learn" link="/academy/apply" label="Apply Now">
          Join our next cohort of students and learn to be a web developer.
        </Engagement>
      </div>
    </section>
    <section>
      <Capture />
    </section>
  </div>
)

export default IndexPage
