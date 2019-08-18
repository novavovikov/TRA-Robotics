import { AssemblyStatusEnum, ReviewStatusEnum } from '../types'

export const ANY_STATUS = 'ANY'

export const PAGE_SIZE = 10

export const CARD_STATUS_NAMES = {
  [AssemblyStatusEnum.IN_REVIEW]: 'In Review',
  [AssemblyStatusEnum.REVIEW_FINISHED]: 'Finished',
  [ReviewStatusEnum.DRAFT]: 'Draft',
  [ReviewStatusEnum.SOLVED]: 'Simulation Finished',
  [ReviewStatusEnum.SIMULATION_REQUESTED]: 'Simulation Requested',
  [ReviewStatusEnum.SIMULATION_POSITIVE]: 'Simulation Positive',
  [ReviewStatusEnum.SIMULATION_NEGATIVE]: 'Simulation Negative',
}

export const ASSEMBLY_STATUS_FILTERS = [
  {
    label: 'Any',
    value: ANY_STATUS
  },
  {
    label: 'In Review',
    value: AssemblyStatusEnum.IN_REVIEW
  },
  {
    label: 'Review Finished',
    value: AssemblyStatusEnum.REVIEW_FINISHED
  },
]

export const REVIEW_STATUS_FILTERS = [
  {
    label: 'Any',
    value: ANY_STATUS
  },
  {
    label: 'Draft',
    value: ReviewStatusEnum.DRAFT
  },
  {
    label: 'Solved',
    value: ReviewStatusEnum.SOLVED
  },
  {
    label: 'Simulation Requested',
    value: ReviewStatusEnum.SIMULATION_REQUESTED
  },
  {
    label: 'Simulation Positive',
    value: ReviewStatusEnum.SIMULATION_POSITIVE
  },
  {
    label: 'Simulation Negative',
    value: ReviewStatusEnum.SIMULATION_NEGATIVE
  },
]
