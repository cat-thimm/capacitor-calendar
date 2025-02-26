import React, { FC, useState } from 'react'
import { useHistory } from 'react-router'

import { useCalendarEvents } from '@/hooks/use-calendar-events'
import { CustomEvent } from '@/types/CustomEvent'

import { CreateEvent } from './create-event.markup'
import uuid from 'react-uuid'

export const CreateEventContainer: FC = () => {
  const { addEventToCalendar } = useCalendarEvents()

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const history = useHistory()

  const returnToHomepage = () => {
    history.push('..')
  }

  const onSubmitForm = async (calendarProps: {
    title: string
    startDate: string
    endDate: string
    isRecurring?: boolean
    description?: string
  }) => {
    await addEventToCalendar({
      id: uuid(),
      title: calendarProps.title,
      startDate: new Date(calendarProps.startDate).getTime(),
      endDate: new Date(calendarProps.endDate).getTime(),
      description: calendarProps.description
    })
  }

  return (
    <CreateEvent
      onSubmitForm={onSubmitForm}
      setShowSuccessModal={setShowSuccessModal}
      showSuccessModal={showSuccessModal}
      returnToHomepage={returnToHomepage}
    />
  )
}
