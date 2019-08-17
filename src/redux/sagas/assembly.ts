import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { API } from '../../constants/api'
import ac from '../actions'
import { AssemblyActionTypes } from '../actionTypes/assembly'
import { GetAssemblySaga } from '../interfaces/assembly'
import { getAssemblyQuery } from '../../utils/assemblyFilters'
import { setAssemblyLoadingStatus } from '../actions/assembly'

export function * getAssemblySaga ({ params, init }: GetAssemblySaga) {
  yield put(setAssemblyLoadingStatus(true))

  try {
    const query = getAssemblyQuery(params, init)

    const res = yield call(axios, `${API.ASSEMBLY}${query}`)
    const total = res.headers[('x-total-count')]

    yield put(ac.setAssembly({
      data: res.data,
      total,
    }))
  } catch (error) {
    console.error('getAssemblySaga: ', error)
  }

  yield put(setAssemblyLoadingStatus(false))
}

export function * watchAssembly () {
  yield takeEvery(AssemblyActionTypes.SAGA_GET_ASSEMBLY, getAssemblySaga)
}
