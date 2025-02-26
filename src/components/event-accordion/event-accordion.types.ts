import { CustomEvent } from '@/types/CustomEvent'

export interface EventAccordionContainerProps {
  event: CustomEvent
  onDelete: (eventId: string) => Promise<void>
}

export interface EventAccordionProps {
  event: CustomEvent
  startDate: { weekday: string; day: string; time: string }
  endDate: { weekday: string; day: string; time: string }
  onDelete: (eventId: string) => Promise<void>
}
