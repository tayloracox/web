import React from 'react'
import Link from 'gatsby-link'
import Icon from './Icon'
import logoMain from '../images/logo.svg'

const Footer = () => (
  <footer className="Footer">
    <hr />
    <section>
      <div className="ident">
        <img
          src={logoMain}
          alt="Suncoast Developers Guild Shield Logo"
          height="100"
        />
        <p>
          <strong>Suncoast Developers Guild, Inc.</strong> is a Florida
          not-for-profit corporation.
        </p>
        <p>
          <a href="mailto:hello@suncoast.io">hello@suncoast.io</a>
        </p>
        <p>
          Questions? <Link to="/contact">Contact Us</Link>.
        </p>
      </div>
      <div className="locate">
        <h3>Location</h3>
        <p>
          100 7th St S<br />
          St Petersburg, FL 33701
        </p>
        <h3>Mailing Address</h3>
        <p>
          7619 4th Ave N<br />
          St Petersburg, FL 33710
        </p>
      </div>
      <div className="site">
        <ul className="social">
          <li>
            <a href="https://facebook.com">
              <Icon name="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <Icon name="twitter" />
            </a>
          </li>
          <li>
            <a href="https://meetup.com">
              <Icon name="meetup" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com">
              <Icon name="youtube" />
            </a>
          </li>
        </ul>
        <nav>
          <ul>
            <li>
              <Link to="/Community">Community</Link>
            </li>
            <li>
              <Link to="/Academy">Academy</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/conduct">Code of Conduct</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <p className="copyright">
      &copy; 2018 Suncoast Developers Guild, Inc.&nbsp;
      <a href="https://github.com/suncoast-devs/web">
        <Icon name="github" />
      </a>
    </p>
    <p className="love">
      Made with <Icon name="heart" /> in St Petersburg, Florida.
    </p>
  </footer>
)

export default Footer
