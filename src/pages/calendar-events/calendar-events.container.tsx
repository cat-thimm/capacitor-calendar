import React, { FC } from 'react'

import { CalendarEvents } from './calendar-events.markup'
import { useCalendarEvents } from '@/hooks/use-calendar-events'
import { CalendarEvent } from '@ebarooni/capacitor-calendar'

export const CalendarEventsContainer: FC = () => {
  const { calendarEvents, deleteEventFromCalendar } = useCalendarEvents()

  function groupEventsByYearAndMonth(
    events: CalendarEvent[]
  ): Record<number, Record<string, CalendarEvent[]>> {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    return events.reduce(
      (acc, event) => {
        const eventDate = new Date(event.startDate) // Assuming startDate is a valid timestamp or ISO string
        const year = eventDate.getFullYear()
        const month = monthNames[eventDate.getMonth()] // Get full month name

        if (!acc[year]) {
          acc[year] = {} // Create year entry if not exists
        }

        if (!acc[year][month]) {
          acc[year][month] = [] // Create month entry if not exists
        }

        acc[year][month].push(event)
        return acc
      },
      {} as Record<number, Record<string, CalendarEvent[]>>
    )
  }

  return (
    <CalendarEvents
      calendarEvents={groupEventsByYearAndMonth(calendarEvents)}
      deleteEventFromCalendar={deleteEventFromCalendar}
    />
  )
}
