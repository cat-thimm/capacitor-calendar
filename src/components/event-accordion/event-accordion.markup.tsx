import React from 'react'

import { EventAccordionProps } from './event-accordion.types'
import {
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonRouterLink
} from '@ionic/react'
import { createOutline, trashOutline } from 'ionicons/icons'

export const EventAccordion = ({
  event,
  startDate,
  endDate,
  onDelete
}: EventAccordionProps) => {
  return (
    <>
      <IonActionSheet
        trigger={`open-delete-sheet-${event.id}`}
        header="Delete this Event?"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete'
            },
            handler: async () => await onDelete(event.id)
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel'
            }
          }
        ]}
      ></IonActionSheet>
      <IonAccordion value={event?.id} className="border-l-2 border-gray-300">
        <IonItem slot="header">
          <div className="flex flex-col justify-center items-center bg-orange px-2.5 py-1 rounded-xl text-black font-poppins mr-2.5">
            <span className="text-xs">{startDate?.weekday}</span>
            <span>{startDate?.day}</span>
          </div>
          <IonLabel className="flex flex-col">
            <span className="font-poppins">
              {event?.title}{' '}
              <p className="text-sm">
                {startDate?.day}
                {endDate && '- ' + endDate.day}
              </p>
            </span>
          </IonLabel>
        </IonItem>
        <div
          className="ion-padding pt-0 font-poppins gap-1 flex flex-col"
          slot="content"
        >
          <div className="flex flex-col ">
            <span className="text-sm text-gray-300">Description</span>
            {startDate.time} - {endDate.time}
            <br />
            {event?.description}
          </div>
          <div className="w-full flex justify-between">
            <IonButton fill="clear" color="primary" size="small">
              <IonRouterLink routerLink={`/edit-event/${event.id}`}>
                <div className="flex items-center gap-1">
                  <IonIcon icon={createOutline} />
                  Edit
                </div>
              </IonRouterLink>
            </IonButton>
            <IonButton
              fill="clear"
              color="danger"
              size="small"
              id={`open-delete-sheet-${event.id}`}
            >
              <span className="flex items-center gap-1">
                <IonIcon icon={trashOutline} />
                Delete
              </span>
            </IonButton>
          </div>
        </div>
      </IonAccordion>
    </>
  )
}
