import { Calendar, CalendarEvent } from '@ebarooni/capacitor-calendar'

export interface EventAccordionContainerProps {
  event: CalendarEvent
  onDelete: (eventId: string) => Promise<void>
}

export interface EventAccordionProps {
  event: CalendarEvent
  startDate: { weekday: string; day: string; time: string }
  endDate: { weekday: string; day: string; time: string }
  onDelete: (eventId: string) => Promise<void>
}
