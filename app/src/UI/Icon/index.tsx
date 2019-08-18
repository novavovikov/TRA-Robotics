import cn from 'classnames'
import React, { FC } from 'react'
import { IconTypes } from '../../types'
import removeIcon from './icons/remove-ico.svg?inline'
import editIcon from './icons/edit-ico.svg?inline'
import * as s from './Icon.css'

interface Props {
  type: IconTypes
  className?: string
}

const getIcon = (type: IconTypes) => {
  switch (type) {
    case IconTypes.remove:
      return removeIcon
    case IconTypes.edit:
      return editIcon
    default:
      return null
  }
}

const Icon: FC<Props> = (
  {
    type,
    className,
  },
) => {
  return (
    <span
      className={cn(s.Icon, className)}
      dangerouslySetInnerHTML={{ __html: getIcon(type) }}
    />
  )
}

export default Icon
