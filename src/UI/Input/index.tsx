import cn from 'classnames'
import React, { Component, InputHTMLAttributes } from 'react'
import * as s from './Input.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  theme: 'search'
}

class Input extends Component<Props> {
  render () {
    const {
      className,
      theme,
      ...rest
    } = this.props

    return (
      <label className={cn(
        s.Input,
        {
          [s.Input_search]: theme === 'search'
        },
        className
      )}>
        <input
          className={s.Input__field}
          type="text"
          {...rest}
        />
      </label>
    )
  }
}

export default Input
