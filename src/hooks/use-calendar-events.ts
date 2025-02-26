import { useContext } from 'react'

import { CalendarEventsContext } from '@/provider/calendar-events/calendar-events-provider.context'

/**
 * Hook to use the CalendarEvents context in components.
 */
export const useCalendarEvents = () => {
  const context = useContext(CalendarEventsContext)
  if (context === undefined) {
    throw new Error(
      'useCalendarEvents must be used within a CalendarEventsProvider'
    )
  }
  return context
}
