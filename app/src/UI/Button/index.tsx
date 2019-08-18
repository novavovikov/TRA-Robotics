import cn from 'classnames'
import React, { ButtonHTMLAttributes, FC } from 'react'
import * as s from './Button.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string
}

const Button: FC<Props> = (
  {
    children,
    className,
    theme,
    ...rest
  },
) => {
  return (
    <button
      className={cn(
        s.Button,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
