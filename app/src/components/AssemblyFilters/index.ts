import { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { getAssemblySaga, resetAssembly } from '../../redux/actions/assembly'
import { iAssemblySearchParams } from '../../types'

interface Props extends RouteComponentProps {
  getAssembly: (params: iAssemblySearchParams, init: boolean) => void
  resetAssembly: () => void
}

class AssemblyFilters extends Component<Props> {
  unListen: () => void

  componentDidMount (): void {
    const { history, location } = this.props

    this.getAssembly(location.search, true)

    this.unListen = history.listen((location) => {
      this.getAssembly(location.search)
    })
  }

  componentWillUnmount (): void {
    this.unListen()
  }

  getAssembly = (search: string, init: boolean = false) => {
    const { getAssembly, resetAssembly } = this.props
    const urlSearchParams = new URLSearchParams(search)

    const params = {} as iAssemblySearchParams

    for (const entry of urlSearchParams) {
      const [key, value] = entry
      params[key] = value
    }

    if (Number(params.page) === 0) {
      resetAssembly()
    }

    getAssembly(params, init)
  }

  render () {
    return this.props.children
  }
}

export default compose(
  withRouter,
  connect(null, {
    getAssembly: getAssemblySaga,
    resetAssembly,
  }),
)(AssemblyFilters)
