import { all } from 'redux-saga/effects'
import { watchAssembly } from './assembly'

export default function * rootSaga () {
  yield all([
    watchAssembly(),
  ])
}
