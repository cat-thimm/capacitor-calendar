import React, { ReactNode, useEffect, useState } from 'react'
import { Calendar, CapacitorCalendar } from '@ebarooni/capacitor-calendar'

import { getCalendarEvents, storeCalendarEvents } from '@/helpers/storage'
import { CustomEvent } from '@/types/CustomEvent'

import { CalendarEventsContext } from './calendar-events-provider.context'
import uuid from 'react-uuid'

export const CalendarEventsProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [calendarEvents, setCalendarEvents] = useState<CustomEvent[]>([])
  const [defaultCalendar, setDefaultCalendar] = useState<Calendar | null>(null)

  useEffect(() => {
    async function requestAllPermissions() {
      const permissionsStatus =
        await CapacitorCalendar.requestFullCalendarAccess()
      console.log('[DEBUG] All permissions:', permissionsStatus)
    }

    async function fetchCalendarSources() {
      const defaultCalendar = await CapacitorCalendar.getDefaultCalendar()

      setDefaultCalendar(defaultCalendar.result)
    }

    async function initializeCalendarEvents() {
      const events = await getCalendarEvents()

      setCalendarEvents(events)
    }

    requestAllPermissions()
    fetchCalendarSources()
    initializeCalendarEvents()
  }, [])

  const addEventToCalendar = async (calendarProps: {
    title: string
    startDate?: number
    endDate?: number
    isAllDay?: boolean
    description?: string
  }) => {
    const result = await CapacitorCalendar.createEvent({
      calendarId: defaultCalendar.id,
      ...calendarProps
    })

    const newEvent: CustomEvent = {
      id: result.id,
      title: calendarProps.title,
      startDate: calendarProps.startDate,
      endDate: calendarProps.endDate,
      description: calendarProps.description
    }

    setCalendarEvents([newEvent, ...calendarEvents])

    await storeCalendarEvents([newEvent, ...calendarEvents])
  }

  const updateEventInCalendar = async (calendarProps: {
    id: string
    title?: string
    startDate?: number
    endDate?: number
    isAllDay?: boolean
    description?: string
  }) => {
    try {
      // Modify the event in the Capacitor Calendar
      await CapacitorCalendar.modifyEvent(calendarProps)

      // Update the event in local state
      const updatedEvents = calendarEvents.map(event =>
        event.id === calendarProps.id ? { ...event, ...calendarProps } : event
      )

      setCalendarEvents(updatedEvents)

      // Persist changes to local storage
      await storeCalendarEvents(updatedEvents)
    } catch (error) {
      console.error('[ERROR] Failed to update event:', error)
    }
  }

  const deleteEventFromCalendar = async (eventId: string) => {
    await CapacitorCalendar.deleteEvent({ id: eventId })

    const newEvents = [...calendarEvents].filter(event => event.id !== eventId)

    setCalendarEvents(newEvents)
    await storeCalendarEvents(newEvents)
  }

  return (
    <CalendarEventsContext.Provider
      value={{
        calendarEvents,
        addEventToCalendar,
        updateEventInCalendar,
        deleteEventFromCalendar
      }}
    >
      {children}
    </CalendarEventsContext.Provider>
  )
}
