import React, { ChangeEvent, Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import debounce from 'debounce'
import { Input } from '../../UI'
import s from './Search.css'

interface Props extends RouteComponentProps {
  field: string
}

interface State {
  inputValue: string
}

class Search extends Component<Props, State> {
  private DEBOUNCE_TIMEOUT = 200

  getInputValue = (): string => {
    const { location, field } = this.props
    const urlSearchParams = new URLSearchParams(location.search)

    return urlSearchParams.get(field) || ''
  }

  state = {
    inputValue: this.getInputValue()
  }

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    this.setState({
      inputValue: value
    })

    this.setSearchParams(value)
  }

  setSearchParams = debounce((value: string) => {
    const { history, field } = this.props

    const urlSearchParams = new URLSearchParams(location.search)
    urlSearchParams.set(field, value)
    urlSearchParams.set('page', '0')

    history.push({
      search: urlSearchParams.toString(),
    })
  }, this.DEBOUNCE_TIMEOUT)

  render () {
    const { inputValue } = this.state

    return (
      <Input
        className={s.Search}
        theme="search"
        placeholder="Search by assembly name"
        value={inputValue}
        onChange={this.handleInput}
      />
    )
  }
}

export default withRouter(Search)
