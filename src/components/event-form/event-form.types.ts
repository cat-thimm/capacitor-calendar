interface InitialFromProps {
  title: string
  description: string
  startDate: string
  endDate: string
}

export interface EventFormContainerProps {
  initialValues: InitialFromProps
  onSubmitForm: (calendarProps: InitialFromProps) => Promise<void>
}

export interface EventFormProps {
  initialValues: InitialFromProps
  onSubmitForm: (calendarProps: InitialFromProps) => Promise<void>
}
