import { CustomEvent } from '@/types/CustomEvent'

export interface CalendarEventsContextType {
  calendarEvents: CustomEvent[]
  addEventToCalendar: (calendarProps: CustomEvent) => Promise<void>
  updateEventInCalendar: (calendarProps: CustomEvent) => Promise<void>
  deleteEventFromCalendar: (eventId: string) => Promise<void>
}
