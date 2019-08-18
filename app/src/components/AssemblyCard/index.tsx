import React, { ChangeEvent, Component, createRef, KeyboardEvent } from 'react'
import cn from 'classnames'
import format from 'date-fns/format'
import { Link } from 'react-router-dom'
import { AssemblyStatusEnum, iAssemblyItem, IconTypes, ReviewStatusEnum } from '../../types'
import { CARD_STATUS_NAMES } from '../../constants/filters'
import { ROUTES } from '../../constants/routes'
import { Icon } from '../../UI'
import s from './AssemblyCard.css'

interface Props {
  data: iAssemblyItem
  onRemove: (id: string) => void
}

interface State {
  editMode: boolean
  title: string
}

class AssemblyCard extends Component<Props, State> {
  inputRef = createRef<HTMLInputElement>()

  state = {
    editMode: false,
    title: this.props.data.title,
  }

  inputFocus = () => {
    const { current: input } = this.inputRef

    if (input) {
      input.focus()
    }
  }

  changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleEdit = () => {
    const { editMode } = this.state

    this.setState({
      editMode: !editMode,
    }, this.inputFocus)
  }

  submitTitle = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter': {
        return this.setState({ editMode: false })
      }
      case 'Escape':
        return this.setState({
          editMode: false,
          title: this.props.data.title,
        })
    }
  }

  handleRemove = () => {
    const { onRemove, data } = this.props

    onRemove(data._id)
  }

  render () {
    const { editMode, title } = this.state

    const {
      _id,
      assemblyStatus,
      img,
      reviewStatus,
      updated,
    } = this.props.data

    return (
      <div className={s.AssemblyCard}>
        <div className={cn(s.AssemblyCard__status, {
          [s.AssemblyCard__status_in_review]: assemblyStatus === AssemblyStatusEnum.IN_REVIEW,
        })}>
          {CARD_STATUS_NAMES[assemblyStatus]}
        </div>
        <div className={s.AssemblyCard__img}>
          {img && (
            <img
              src={img}
              alt=""
            />
          )}
        </div>

        <div className={s.AssemblyCard__info}>
          <input
            type="text"
            value={title}
            className={s.AssemblyCard__title}
            onChange={this.changeTitle}
            onKeyDown={this.submitTitle}
            disabled={!editMode}
            ref={this.inputRef}
          />

          <div className={s.AssemblyCard__row}>
            <div className={s.AssemblyCard__label}>
              Review
            </div>
            <div className={cn(s.AssemblyCard__value, {
              [s.AssemblyCard__value_green]: reviewStatus === ReviewStatusEnum.SIMULATION_POSITIVE,
              [s.AssemblyCard__value_red]: reviewStatus === ReviewStatusEnum.SIMULATION_NEGATIVE,
            })}>
              {CARD_STATUS_NAMES[reviewStatus]}
            </div>
          </div>

          <div className={s.AssemblyCard__row}>
            <div className={s.AssemblyCard__label}>
              Last Updates
            </div>
            <div className={s.AssemblyCard__value}>
              {format(
                updated,
                'MM/DD/YYYY, HH:mm',
              )}
            </div>
          </div>
        </div>

        <div className={s.AssemblyCard__controls}>
          <div>
            <button
              className={s.AssemblyCard__control}
              onClick={this.handleEdit}
            >
              <Icon type={IconTypes.edit}/>
            </button>
            <button
              className={s.AssemblyCard__control}
              onClick={this.handleRemove}
            >
              <Icon type={IconTypes.remove}/>
            </button>
          </div>

          <Link
            to={`${ROUTES.ASSEMBLY}/${_id}`}
            className={s.AssemblyCard__button}
          >
            View Process
          </Link>
        </div>
      </div>
    )
  }
}

export default AssemblyCard
