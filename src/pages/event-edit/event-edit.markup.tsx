import React from 'react'

import {
  IonAlert,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { arrowBack } from 'ionicons/icons'
import { EventEditProps } from '@/pages/event-edit/event-edit.types'
import { EventFormContainer } from '@/components/event-form'

export const EventEdit = ({
  onSubmitForm,
  showSuccessModal,
  setShowSuccessModal,
  returnToHomepage,
  currentEvent
}: EventEditProps) => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Edit Event</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar mode="ios" className="flex items-center">
            <IonButtons slot="start" className="self-center">
              <IonRouterLink routerLink="..">
                <IonIcon icon={arrowBack} />
              </IonRouterLink>
            </IonButtons>
            <IonTitle size="large">Edit Event</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAlert
          isOpen={showSuccessModal}
          header="Success!"
          message="The event was successfully updated."
          buttons={[
            {
              text: 'Go to overview',
              handler: () => {
                returnToHomepage()
              }
            }
          ]}
          onDidDismiss={() => setShowSuccessModal(false)}
        ></IonAlert>
        <EventFormContainer
          initialValues={{
            title: currentEvent ? currentEvent.title : '',
            description: currentEvent ? currentEvent.description : '',
            startDate: currentEvent
              ? new Date(currentEvent.startDate).toISOString()
              : new Date().toISOString(),
            endDate: currentEvent
              ? new Date(currentEvent.endDate).toISOString()
              : new Date().toISOString(),
            isRecurring: false
          }}
          onSubmitForm={calendarProps =>
            onSubmitForm(calendarProps).then(() => setShowSuccessModal(true))
          }
        />
      </IonContent>
    </IonPage>
  )
}
