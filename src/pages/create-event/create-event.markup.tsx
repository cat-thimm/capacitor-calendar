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

import { CreateEventProps } from '@/pages/create-event/create-event.types'
import { EventFormContainer } from '@/components/event-form'

const INITIAL_VALUES = {
  title: '',
  description: '',
  isRecurring: false,
  startDate: new Date().toISOString().split('.')[0],
  endDate: new Date().toISOString().split('.')[0]
}

export const CreateEvent = ({
  onSubmitForm,
  showSuccessModal,
  setShowSuccessModal,
  returnToHomepage
}: CreateEventProps) => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>New Event</IonTitle>
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
            <IonTitle size="large">New Event</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAlert
          isOpen={showSuccessModal}
          header="Success!"
          message="The event was successfully added"
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
          initialValues={INITIAL_VALUES}
          onSubmitForm={calendarProps =>
            onSubmitForm(calendarProps).then(() => setShowSuccessModal(true))
          }
        />
      </IonContent>
    </IonPage>
  )
}
