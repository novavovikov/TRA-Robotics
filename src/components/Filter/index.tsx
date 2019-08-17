import React, { Component } from 'react'
import { StatusFilter } from '../index'
import {
  ASSEMBLY_STATUS_FILTERS,
  REVIEW_STATUS_FILTERS,
} from '../../constants/filters'
import * as s from './Filter.css'

class Filter extends Component {
  render () {
    return (
      <div className={s.Filter}>
        <h4 className={s.Filter__title}>
          Filter
        </h4>

        <StatusFilter
          title="Assembly"
          type="assemblyStatus"
          controls={ASSEMBLY_STATUS_FILTERS}
        />

        <StatusFilter
          title="Review"
          type="reviewStatus"
          controls={REVIEW_STATUS_FILTERS}
        />
      </div>
    )
  }
}

export default Filter
