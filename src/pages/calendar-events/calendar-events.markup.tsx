import React from 'react'
import {
  IonAccordionGroup,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { addOutline } from 'ionicons/icons'

import { CalendarEventsProps } from '@/pages/calendar-events/calendar-events.types'
import { EventAccordionContainer } from '@/components/event-accordion'

export const CalendarEvents = ({
  calendarEvents,
  deleteEventFromCalendar
}: CalendarEventsProps) => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Calendar Events</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar mode="ios" className="flex items-center">
            <IonTitle size="large">Calendar Events</IonTitle>
            <IonButtons slot="end" className="self-center">
              <IonRouterLink
                routerLink="/create-event"
                className="button-primary"
              >
                <span className="flex items-center">
                  <IonIcon icon={addOutline} />
                </span>
              </IonRouterLink>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {Object.entries(calendarEvents).length === 0 && (
          <p className="text-center flex items-center justify-center font-poppins text-gray-300">
            Add new events by clicking the + Button!
          </p>
        )}

        {Object.entries(calendarEvents).map(([year, months]) => (
          <div key={year} className="mb-6">
            <h2 className="text-2xl font-bold ml-4 ">{year}</h2>
            {Object.entries(months).map(([month, events]) => (
              <div key={month} className="ml-4 mt-2">
                <h3 className="text-xl font-semibold">{month}</h3>
                <IonAccordionGroup className="ml-2 list-disc">
                  {events.map(calendarEvent => (
                    <EventAccordionContainer
                      key={calendarEvent.id}
                      event={calendarEvent}
                      onDelete={deleteEventFromCalendar}
                    />
                  ))}
                </IonAccordionGroup>
              </div>
            ))}
          </div>
        ))}
      </IonContent>
    </IonPage>
  )
}
