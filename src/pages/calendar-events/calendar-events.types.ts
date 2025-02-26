import { CalendarEvent } from '@ebarooni/capacitor-calendar'

export interface CalendarEventsProps {
  calendarEvents: Record<number, Record<string, CalendarEvent[]>>
  deleteEventFromCalendar: (eventId: string) => Promise<void>
}
