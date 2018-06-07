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
          not-for-profit corporation and registered 501(c)(3) organization.
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
          <a href="https://www.google.com/maps/place/2220+Central+Ave,+St.+Petersburg,+FL+33712/@27.770774,-82.663524,16z">
            2220 Cental Ave
          </a>
          <br />
          St Petersburg, FL 33712
        </p>
        <ul>
          <li>
            <Link to="/conduct">Code of Conduct</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
        </ul>
      </div>
      <div className="site">
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/SuncoastDevelopersGuild/">
              <Icon name="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/suncoastio">
              <Icon name="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.meetup.com/suncoast-developers-guild/">
              <Icon name="meetup" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCHEG7eYS1ijBUjh44mpBwVg">
              <Icon name="youtube" />
            </a>
          </li>
          <li>
            <a href="https://suncoast-devs.now.sh/">
              <Icon name="slack" />
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
