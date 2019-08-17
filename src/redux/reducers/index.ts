import { combineReducers } from 'redux'
import { assembly, AssemblyState } from './assembly'

export interface RootState {
  assembly: AssemblyState
}

export default () => {
  return combineReducers<RootState>({
    assembly,
  })
}
