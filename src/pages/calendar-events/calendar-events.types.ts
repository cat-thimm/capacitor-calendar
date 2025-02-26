import { CustomEvent } from '@/types/CustomEvent'

export interface CalendarEventsProps {
  calendarEvents: Record<number, Record<string, CustomEvent[]>>
  deleteEventFromCalendar: (eventId: string) => Promise<void>
}
