import React, { Component } from 'react'
import throttle from 'lodash/throttle'

const withInfiniteScroll = callback => WrappedComponent =>
  class extends Component {
    constructor() {
      super()
      this.infiniteScroll = this.infiniteScroll.bind(this)
      this.onResize = this.onResize.bind(this)
      this.infiniteScroll = throttle(this.infiniteScroll, 200)
      this.onResize = throttle(this.onResize, 300, { leading: false })
      this.boundCallback = callback.bind(this)
    }

    componentDidMount() {
      window.addEventListener('scroll', this.infiniteScroll)
      window.addEventListener('resize', this.onResize)
    }

    componentDidUpdate() {
      window.scrollTo(0, this.props.scrollPosition)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.infiniteScroll)
      window.removeEventListener('resize', this.onResize)
    }

    onResize() {
      this.forceUpdate()
    }

    infiniteScroll() {
      const pageHeight = document.documentElement.scrollHeight
      const pageScrolled = window.pageYOffset
      const screenHeight = document.documentElement.clientHeight
      const needMorePages = pageHeight - pageScrolled - screenHeight - 200 < 0

      if (needMorePages) {
        this.boundCallback()
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

export default withInfiniteScroll
