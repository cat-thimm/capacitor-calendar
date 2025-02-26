import React from 'react'

import { EventForm } from './event-form.markup'
import { EventFormContainerProps } from './event-form.types'

export const EventFormContainer = ({
  onSubmitForm,
  initialValues
}: EventFormContainerProps) => {
  return <EventForm onSubmitForm={onSubmitForm} initialValues={initialValues} />
}
