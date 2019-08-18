import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import notFoundImg from './images/not-found.svg'
import * as s from './NotFound.css'

const NotFound: FC = () => (
  <div className={s.NotFound}>
    <div className={s.NotFound__img}>
      <img src={notFoundImg} alt=""/>
    </div>
    <div className={s.NotFound__title}>
      Page not found
    </div>
    <div className={s.NotFound__subtitle}>
      404
    </div>

    <Link
      to={ROUTES.HOME}
      className={s.NotFound__link}
    >
      Go to home page
    </Link>
  </div>
)

export default NotFound
