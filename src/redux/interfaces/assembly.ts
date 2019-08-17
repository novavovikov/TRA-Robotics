import { AssemblyActionTypes } from '../actionTypes/assembly'
import { iAssemblySearchParams } from '../../types'
import { AssemblyState } from '../reducers/assembly'

export interface GetAssemblySaga {
  type: AssemblyActionTypes.SAGA_GET_ASSEMBLY,
  params: iAssemblySearchParams
  init: boolean
}

export interface SetAssembly {
  type: AssemblyActionTypes.SET_ASSEMBLY,
  payload: Partial<AssemblyState>
}

export interface SetAssemblyLoadingStatus {
  type: AssemblyActionTypes.SET_ASSEMBLY_LOADING_STATUS,
  payload: boolean
}

export interface RemoveAssemblyItem {
  type: AssemblyActionTypes.REMOVE_ASSEMBLY_ITEM,
  payload: string
}

export interface ResetAssembly {
  type: AssemblyActionTypes.RESET_ASSEMBLY_DATA
}

export type AssemblyAction =
  GetAssemblySaga |
  SetAssembly |
  SetAssemblyLoadingStatus |
  RemoveAssemblyItem |
  ResetAssembly
