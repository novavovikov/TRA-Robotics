import React, { FC, MouseEvent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Switch } from '../../UI'
import * as s from './Sorting.css'

const SWITCHES = [
  {
    label: 'Latest first',
    value: 'asc',
  },
  {
    label: 'Old first',
    value: 'desc',
  },
]

interface Props extends RouteComponentProps {
  type: string
}

const Sorting: FC<Props> = (props) => {
  const { history, location,  type } = props

  const getValue = () => {
    const urlSearchParams = new URLSearchParams(location.search)

    return urlSearchParams.get(type) || 'asc'
  }

  const handleSwitch = (e: React. MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement

    const urlSearchParams = new URLSearchParams(location.search)
    urlSearchParams.set(type, value)
    urlSearchParams.set('page', '0')

    history.push({
      search: urlSearchParams.toString(),
    })
  }

  return (
    <div className={s.Sorting}>
      <div className={s.Sorting__label}>
        Show
      </div>
      <Switch
        controls={SWITCHES}
        onChange={handleSwitch}
        value={getValue()}
      />
    </div>
  )
}

export default withRouter(Sorting)
