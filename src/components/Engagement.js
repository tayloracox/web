import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Engagement extends Component {
  _click = event => {
    const a = event.target.querySelector('a')
    if (a) a.click()
  }

  render() {
    return (
      <aside className={this.props.title.toLowerCase()} onClick={this._click}>
        <h3>{this.props.title}</h3>
        <p className="desc">{this.props.children}</p>
        <p className="cta">
          {/^\//.test(this.props.link) ? (
            <Link to={this.props.link}>{this.props.label}</Link>
          ) : (
            <OutboundLink href={this.props.link}>
              {this.props.label}
            </OutboundLink>
          )}
        </p>
      </aside>
    )
  }
}

export default Engagement
