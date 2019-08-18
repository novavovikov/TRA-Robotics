import React, { Component, MouseEvent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import cn from 'classnames'
import { IFilter } from '../../types'
import { ANY_STATUS } from '../../constants/filters'
import * as s from './StatusFilter.css'

interface Props extends RouteComponentProps {
  title: string,
  type: string,
  controls: IFilter[]
}

class StatusFilter extends Component<Props & RouteComponentProps> {
  handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    const { type, history, location } = this.props
    const { value } = e.target as HTMLButtonElement

    const urlSearchParams = new URLSearchParams(location.search)
    urlSearchParams.set(type, value)
    urlSearchParams.set('page', '0')

    history.push({
      search: urlSearchParams.toString(),
    })
  }

  getActiveStatus = () => {
    const { type, location } = this.props

    const urlSearchParams = new URLSearchParams(location.search)

    return urlSearchParams.get(type) || ANY_STATUS
  }

  render () {
    const { title, controls } = this.props
    const activeStatus = this.getActiveStatus()

    return (
      <div className={s.StatusFilter}>
        <h5 className={s.StatusFilter__title}>
          {title}
        </h5>

        {controls.map(({ label, value }) => (
          <button
            key={value}
            className={cn(s.StatusFilter__control, {
              [s.StatusFilter__control_active]: value === activeStatus,
            })}
            onClick={this.handleButton}
            value={value}
          >
            {label}
          </button>
        ))}
      </div>
    )
  }
}

export default withRouter(StatusFilter)
