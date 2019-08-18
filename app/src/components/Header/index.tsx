import React, { FC } from 'react'
import * as s from './Header.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const Header: FC = () => {
  return (
    <header className={s.Header}>
      <Link
        to={ROUTES.HOME}
        className={s.Header__logo}
      >
        Design2Robofacturing
      </Link>
    </header>
  )
}

export default Header
