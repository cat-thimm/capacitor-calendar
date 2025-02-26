import { Preferences } from '@capacitor/preferences'
import { CalendarEvent } from '@ebarooni/capacitor-calendar'
import { CustomEvent } from '@/types/CustomEvent'

export const storeCalendarEvents = async (calendarEvents: CustomEvent[]) => {
  await Preferences.set({
    key: 'calendar-events',
    value: JSON.stringify(calendarEvents)
  })
}

export const getCalendarEvents = async (): Promise<CustomEvent[]> => {
  const { value } = await Preferences.get({ key: 'calendar-events' })

  return value ? JSON.parse(value) : []
}
