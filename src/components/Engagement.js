import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'

class Engagement extends Component {
  constructor(props) {
    super(props)
    this.linkRef = React.createRef()
  }

  _click = () => {
    console.log('Clicked', this.linkRef.current)
    if (this.linkRef.current.click) {
      this.linkRef.current.click()
    } else {
      navigateTo(this.linkRef.current.props.to)
    }
  }

  render() {
    return (
      <aside className={this.props.title.toLowerCase()} onClick={this._click}>
        <h3>{this.props.title}</h3>
        <p className="desc">{this.props.children}</p>
        <p className="cta">
          {/^\//.test(this.props.link) ? (
            <Link to={this.props.link} ref={this.linkRef}>
              {this.props.label}
            </Link>
          ) : (
            <a href={this.props.link} ref={this.linkRef}>
              {this.props.label}
            </a>
          )}
        </p>
      </aside>
    )
  }
}

export default Engagement
