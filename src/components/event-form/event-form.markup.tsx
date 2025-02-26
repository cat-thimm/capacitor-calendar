import React from 'react'

import { EventFormProps } from './event-form.types'
import { addEventSchema } from '@/pages/event-edit/event-edit.helper'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {
  IonDatetime,
  IonDatetimeButton,
  IonItem,
  IonList,
  IonModal,
  IonSelect,
  IonSelectOption
} from '@ionic/react'

export const EventForm = ({ initialValues, onSubmitForm }: EventFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addEventSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmitForm({
          title: values.title,

          startDate: values.startDate,
          endDate: values.endDate,
          description: values.description,
          isRecurring: values.isRecurring
        }).then(() => {
          setSubmitting(false)
        })
      }}
      validateOnChange
      enableReinitialize
    >
      {({ isSubmitting, values, setFieldValue }) => {
        return (
          <Form className="p-5 flex flex-col gap-3">
            <label className="label">
              Title <span className="text-red">*</span>
            </label>
            <Field className="input" name="title" placeholder="Event Title" />
            <ErrorMessage
              className="error-message"
              name="title"
              component="div"
            />
            <label className="flex items-center gap-2.5 label">
              <div className="w-[100px]">
                Start Date <span className="text-red">*</span>
              </div>

              <IonDatetimeButton datetime="datetime-start" />
              <IonModal keepContentsMounted={true}>
                <IonDatetime
                  id="datetime-start"
                  name="startDate"
                  value={values.startDate}
                  onIonChange={async event => {
                    await setFieldValue('startDate', event.detail.value)
                  }}
                ></IonDatetime>
              </IonModal>
            </label>
            <ErrorMessage
              className="error-message"
              name="startDate"
              component="div"
            />

            <label className="flex items-center gap-2.5 label">
              <div className="w-[100px]">
                End Date <span className="text-red">*</span>
              </div>

              <>
                <IonDatetimeButton datetime="datetime-end" />
                <IonModal keepContentsMounted={true}>
                  <IonDatetime
                    id="datetime-end"
                    name="endDate"
                    value={values.endDate}
                    onIonChange={async event => {
                      await setFieldValue('endDate', event.detail.value)
                    }}
                  ></IonDatetime>
                </IonModal>
              </>
            </label>
            <ErrorMessage
              className="error-message"
              name="endDate"
              component="div"
            />
            <label className="label">Notes</label>
            <Field
              className="textarea"
              name="description"
              placeholder="Notes about the event..."
              component="textarea"
              rows="3"
            />
            <label className="flex items-center gap-2.5 label">
              <Field type="checkbox" name="isRecurring" className="checkbox" />
              Mark as recurring
            </label>

            <IonList>
              <IonItem>
                <IonSelect
                  disabled={!values.isRecurring}
                  aria-label="recurring-event"
                  placeholder="Select interval"
                  value="none"
                >
                  <IonSelectOption value="none">None</IonSelectOption>
                  <IonSelectOption value="weekly">Weekly</IonSelectOption>
                  <IonSelectOption value="monthly">Monthly</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>

            <button className="button-primary w-full" disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
