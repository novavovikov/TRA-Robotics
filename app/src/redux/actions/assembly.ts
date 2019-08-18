import { AssemblyActionTypes } from '../actionTypes/assembly'
import {
  GetAssemblySaga,
  RemoveAssemblyItem,
  ResetAssembly,
  SetAssembly,
  SetAssemblyLoadingStatus,
} from '../interfaces/assembly'
import { iAssemblySearchParams } from '../../types'
import { AssemblyState } from '../reducers/assembly'

export const getAssemblySaga = (params: iAssemblySearchParams, init: boolean): GetAssemblySaga => ({
  type: AssemblyActionTypes.SAGA_GET_ASSEMBLY,
  params,
  init
})

export const setAssembly = (data: Partial<AssemblyState>): SetAssembly => ({
  type: AssemblyActionTypes.SET_ASSEMBLY,
  payload: data,
})

export const setAssemblyLoadingStatus = (status: boolean): SetAssemblyLoadingStatus => ({
  type: AssemblyActionTypes.SET_ASSEMBLY_LOADING_STATUS,
  payload: status,
})

export const removeAssemblyItem = (id: string): RemoveAssemblyItem => ({
  type: AssemblyActionTypes.REMOVE_ASSEMBLY_ITEM,
  payload: id,
})

export const resetAssembly = (): ResetAssembly => ({
  type: AssemblyActionTypes.RESET_ASSEMBLY_DATA
})
