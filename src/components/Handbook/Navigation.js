import React, { Component } from 'react'
import Link from 'gatsby-link'
import Icon from '../Icon'

class Navigation extends Component {
  state = { menuOpen: false }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

  ensureEndsWithSlash = string => string.replace(/([^/])$/,'$1/')

  render() {
    const curriculum = [
      {
        url: '/handbook/curriculum/fundamentals/',
        title: 'Fundamentals'
      },
      {
        url: '/handbook/curriculum/front-end/',
        title: 'Front-end Frameworks'
      },
      {
        url: '/handbook/curriculum/back-end/',
        title: 'Back-end Frameworks'
      }
    ]


    return (
      <nav className={this.state.menuOpen ? 'open' : 'closed'}>
        <header>
          <span className="toggle" onClick={this.toggleMenu}>
            <Icon name="bars" />
          </span>
        </header>
        <ul>
          <li>
            <Link to="/handbook/curriculum/" activeClassName="active">
              Curriculum
            </Link>
            <ul>
              {
                curriculum.map((curricula, index) => (
                  <li key={index}>
                    <Link
                      to={this.ensureEndsWithSlash(curricula.url)}
                      activeClassName="active"
                    >
                      {curricula.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </li>
          <li>
            <Link to="/handbook/tools/" activeClassName="active">
              Tools
            </Link>
          </li>
          <li>
            <Link to="/handbook/skills/" activeClassName="active">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/handbook/resources/" activeClassName="active">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/handbook/career/" activeClassName="active">
              Career
            </Link>
          </li>
          <li>
            <Link to="/handbook/campus/" activeClassName="active">
              Campus
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
