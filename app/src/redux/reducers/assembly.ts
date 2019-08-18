import { Reducer } from 'redux'
import { AssemblyActionTypes } from '../actionTypes/assembly'
import { AssemblyAction } from '../interfaces/assembly'
import { iAssemblyItem } from '../../types'

export interface AssemblyState {
  isLoading: boolean,
  total: number
  data: iAssemblyItem[]
}

const initState: AssemblyState = {
  isLoading: false,
  total: 0,
  data: [],
}

export const assembly: Reducer<AssemblyState, AssemblyAction> = (state = initState, action) => {
  switch (action.type) {
    case AssemblyActionTypes.SET_ASSEMBLY:
      const { data, total } = action.payload as AssemblyState

      return {
        ...state,
        total,
        data: [
          ...state.data,
          ...data,
        ],
      }
      case AssemblyActionTypes.REMOVE_ASSEMBLY_ITEM:
        return {
          ...state,
          total: state.total - 1,
          data: state.data.filter(({ _id }) => _id !== action.payload)
        }
      case AssemblyActionTypes.SET_ASSEMBLY_LOADING_STATUS:
        return {
          ...state,
          isLoading: action.payload
        }
      case AssemblyActionTypes.RESET_ASSEMBLY_DATA:
        return {
          ...state,
          data: []
        }
    default:
      return state
  }
}
