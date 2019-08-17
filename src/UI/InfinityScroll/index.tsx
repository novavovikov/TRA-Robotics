import React, { Component, createRef } from 'react'

interface Props {
  handler: () => void,
  handlerOn: boolean
}

class InfinityScroll extends Component<Props> {
  private offsetBottom = 250
  wrapperRef =createRef<HTMLDivElement>()

  static defaultProps = {
    handlerOn: true
  }

  componentDidMount () {
    window.addEventListener('scroll', this.scrollWindow)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollWindow)
  }

  scrollWindow = () => {
    const { handler, handlerOn} = this.props
    const { current } = this.wrapperRef

    if (handlerOn && current) {
      const wrapperData = current.getBoundingClientRect()
      const wrapperOffsetBottom = wrapperData.top + wrapperData.height - this.offsetBottom

      if (wrapperOffsetBottom < window.innerHeight) {
        handler()
      }
    }
  }

  render () {
    const { children } = this.props
    return (
      <div ref={this.wrapperRef}>
      {children}
      </div>
    )
  }
}

export default InfinityScroll
