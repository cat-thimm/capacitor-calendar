import React, { FC, useEffect, useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import { useCalendarEvents } from '@/hooks/use-calendar-events'
import { CustomEvent } from '@/types/CustomEvent'

import { EventEdit } from './event-edit.markup'

export const EventEditContainer: FC = () => {
  const { updateEventInCalendar, calendarEvents } = useCalendarEvents()
  const { id } = useParams<{ id: string }>()
  const [currentEvent, setCurrentEvent] = useState<CustomEvent | null>(null)

  useEffect(() => {
    if (id) {
      const event = calendarEvents.find(event => event.id === id)
      setCurrentEvent(event ?? null)
    }
  }, [])

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
    await updateEventInCalendar({
      id: id,
      title: calendarProps.title,
      startDate: new Date(calendarProps.startDate).getTime(),
      endDate: new Date(calendarProps.endDate).getTime(),
      description: calendarProps.description
    })
  }

  return (
    <EventEdit
      onSubmitForm={onSubmitForm}
      setShowSuccessModal={setShowSuccessModal}
      showSuccessModal={showSuccessModal}
      returnToHomepage={returnToHomepage}
      currentEvent={currentEvent}
    />
  )
}
