import { iAssemblySearchParams } from '../types'
import { ANY_STATUS, PAGE_SIZE } from '../constants/filters'

export const getAssemblyQuery = (
  params: iAssemblySearchParams,
  init: boolean
) => {
  const searchParams = {
    _start: 0,
    _end: PAGE_SIZE
  } as any

  for (const param in params) {
    const value = params[param]

    switch (param) {
      case 'assemblyStatus':
      case 'reviewStatus':
        if (value !== ANY_STATUS) {
          searchParams[`${param}_like`] = value
        }
        break
      case 'age':
        searchParams['_sort'] = param
        searchParams['_order'] = value
        break
      case 'page':
        const offset = Number(value) * PAGE_SIZE
        const startValue = init ? 0 : offset

        searchParams['_start'] = startValue
        searchParams['_end'] = offset + PAGE_SIZE
        break
      default:
        searchParams[`${param}_like`] = value
    }
  }

  const urlSearchParams = new URLSearchParams(searchParams)

  return `?${urlSearchParams.toString()}`
}
