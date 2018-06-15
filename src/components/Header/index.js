import React from 'react'
import Link from 'gatsby-link'
import { elastic as Menu } from 'react-burger-menu'

import logoBanner from '../../images/icon-logo.svg'

class Header extends React.Component {
  state = { menuOpen: false }

  menuStateChange = state => this.setState({ menuOpen: state.isOpen })

  closeMenu = () => this.setState({ menuOpen: false })

  render() {
    return (
      <header className="Header">
        <div className="wrap">
          <h1>
            <Link to="/">
              <img
                src={logoBanner}
                alt="Suncoast Developers Guild"
                height="72"
              />
            </Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/community" activeClassName="active">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/academy" activeClassName="active">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/team" activeClassName="active">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <a href="tel:7272012012">+1 (727) 201-2012</a>
            </li>
            <li>
              <Link className="cta" to="/#getting-involved">
                Code with Us
              </Link>
            </li>
          </ul>
          <div className="mobile-nav">
            <Menu
              right
              isOpen={this.state.menuOpen}
              pageWrapId="page-wrap"
              onStateChange={this.menuStateChange}
              outerContainerId="outer-container"
            >
              <Link
                to="/"
                exact
                activeClassName="active"
                onClick={this.closeMenu}
              >
                Home
              </Link>
              <Link
                to="/community"
                activeClassName="active"
                onClick={this.closeMenu}
              >
                Community
              </Link>
              <Link
                to="/academy"
                activeClassName="active"
                onClick={this.closeMenu}
              >
                Academy
              </Link>
              <Link
                to="/team"
                activeClassName="active"
                onClick={this.closeMenu}
              >
                Our Team
              </Link>
              <Link
                to="/contact"
                activeClassName="active"
                onClick={this.closeMenu}
              >
                Contact
              </Link>
              <p>
                <a href="tel:7272012012">+1 (727) 201-2012</a>
              </p>
            </Menu>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
