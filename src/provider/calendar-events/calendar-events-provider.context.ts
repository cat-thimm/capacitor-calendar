import { createContext } from 'react'

import { CalendarEventsContextType } from './calendar-events-provider.types'

export const CalendarEventsContext = createContext<CalendarEventsContextType | undefined>(undefined)