import React from 'react'

import { parseTimestamp } from '@/helpers/parse-date'

import { EventAccordion } from './event-accordion.markup'
import { EventAccordionContainerProps } from './event-accordion.types'

export const EventAccordionContainer = ({
  event,
  onDelete
}: EventAccordionContainerProps) => {
  return (
    <EventAccordion
      event={event}
      startDate={parseTimestamp(event?.startDate)}
      endDate={parseTimestamp(event?.endDate)}
      onDelete={onDelete}
    />
  )
}
