export enum IconTypes {
  remove,
  edit
}

export interface IFilter {
  label: string
  value: string
}

export enum AssemblyStatusEnum {
  IN_REVIEW = 'IN_REVIEW',
  REVIEW_FINISHED = 'REVIEW_FINISHED'
}

export enum ReviewStatusEnum {
  DRAFT = 'DRAFT',
  SOLVED = 'SOLVED',
  SIMULATION_REQUESTED = 'SIMULATION_REQUESTED',
  SIMULATION_POSITIVE = 'SIMULATION_POSITIVE',
  SIMULATION_NEGATIVE = 'SIMULATION_NEGATIVE',
}

export interface iAssemblyItem {
  _id: string
  img: string
  age: number
  assemblyStatus: AssemblyStatusEnum
  reviewStatus: ReviewStatusEnum
  title: string
  updated: string
}

export interface iAssemblySearchParams {
  assemblyStatus: string
  reviewStatus: string
  age: string
  page: string
  title: string
  [filter: string]: string
}
