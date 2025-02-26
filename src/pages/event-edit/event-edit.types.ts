import { RouteComponentProps } from 'react-router'

import { CustomEvent } from '@/types/CustomEvent'

export type EventEditContainerProps = RouteComponentProps<{
  id: string
}>

export interface EventEditProps {
  onSubmitForm: (calendarProps: {
    title?: string
    startDate?: string
    endDate?: string
    isRecurring?: boolean
    description?: string
  }) => Promise<void>
  showSuccessModal: boolean
  setShowSuccessModal: (showSuccessModal: boolean) => void
  returnToHomepage: () => void
  currentEvent: CustomEvent | null
}
