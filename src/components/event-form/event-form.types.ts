import { CustomEvent } from '@/types/CustomEvent'

interface InitialFromProps {
  title: string
  description: string
  startDate: string
  endDate: string
  isRecurring: boolean
}

export interface EventFormContainerProps {
  initialValues: InitialFromProps
  onSubmitForm: (calendarProps: InitialFromProps) => Promise<void>
}

export interface EventFormProps {
  initialValues: InitialFromProps
  onSubmitForm: (calendarProps: InitialFromProps) => Promise<void>
}
