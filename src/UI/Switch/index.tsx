import React, { FC } from 'react'
import cn from 'classnames'
import * as s from './Switch.css'

interface SwitchControl {
  value: string
  label: string
}

interface Props {
  controls: SwitchControl[]
  onChange: (e: any) => void
  value: string
}

const Switch: FC<Props> = ({ controls, value: SwitchValue, onChange }) => {
  return (
    <div className={s.Switch}>
      {controls.map(({ label, value }) => (
        <button
          key={value}
          className={cn(s.Switch__control, {
            [s.Switch__control_active]: SwitchValue === value,
          })}
          type="button"
          onClick={onChange}
          value={value}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default Switch
