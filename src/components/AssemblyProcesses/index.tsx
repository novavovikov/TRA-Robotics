import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { iAssemblyItem } from '../../types'
import { RootState } from '../../redux/reducers'
import { AssemblyState } from '../../redux/reducers/assembly'
import { AssemblyCard, Search, Sorting } from '../index'
import { InfinityScroll } from '../../UI'
import { PAGE_SIZE } from '../../constants/filters'
import { removeAssemblyItem } from '../../redux/actions/assembly'
import * as s from './AssemblyProcesses.css'

interface Props extends RouteComponentProps {
  assembly: AssemblyState
  removeAssemblyItem: (id: string) => void
}

class AssemblyProcesses extends Component<Props> {
  changePage = () => {
    const { location, history, assembly } = this.props

    const urlSearchParams = new URLSearchParams(location.search)

    const page = urlSearchParams.get('page')
    const nextPage = page ? Number(page) + 1 : 0

    if (nextPage * PAGE_SIZE < assembly.total) {
      urlSearchParams.set('page', nextPage.toString())

      history.push({
        search: urlSearchParams.toString(),
      })
    }
  }

  render () {
    const { assembly, removeAssemblyItem } = this.props

    return (
      <div className={s.AssemblyProcesses}>
        <div className={s.AssemblyProcesses__header}>
          <h2 className={s.AssemblyProcesses__title}>
            Assembly Processes
          </h2>

          <div className={s.AssemblyProcesses__label}>
            {assembly.total}
          </div>

          <div className={s.AssemblyProcesses__aside}>
            <Sorting type="age"/>
            <Search field="title"/>
          </div>
        </div>


        <InfinityScroll
          handler={this.changePage}
          handlerOn={!assembly.isLoading}
        >
          {assembly.data.map((item: iAssemblyItem) => (
            <AssemblyCard
              key={item._id}
              data={item}
              onRemove={removeAssemblyItem}
            />
          ))}
        </InfinityScroll>
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect(
    ({ assembly }: RootState) => ({
      assembly,
    }),
    {
      removeAssemblyItem,
    },
  ),
)(AssemblyProcesses)
