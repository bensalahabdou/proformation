import React, { Component } from 'react'

import Header from './header'
import Blog from './blog'

export default class Actualite extends Component {
  render () {
    const { articles } = this.props
    return (
      <div>
        <Header />
        <Blog articles={articles} />
      </div>
    )
  }
}
