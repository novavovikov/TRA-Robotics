import React, { FC } from 'react'
import * as s from './Layout.css'

export const Page: FC = ({ children }) => {
  return (
    <div className={s.Layout}>
      {children}
    </div>
  )
}

export const Container: FC = ({ children }) => {
  return (
    <div className={s.Layout__container}>
      {children}
    </div>
  )
}

export const Sidebar: FC = ({ children }) => {
  return (
    <aside className={s.Layout__sidebar}>
      {children}
    </aside>
  )
}

export const Content: FC = ({ children }) => {
  return (
    <main className={s.Layout__content}>
      {children}
    </main>
  )
}
