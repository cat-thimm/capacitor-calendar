import * as Yup from 'yup'

export const addEventSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Your title must be longer than 2 characters.')
    .max(50, 'Your title must be shorter than 50 characters.')
    .required('A title is required'),

  startDate: Yup.date()
    .typeError('Invalid date format')
    .required('A start date is required')
    .transform((value, originalValue) =>
      originalValue ? new Date(originalValue) : null
    ),

  endDate: Yup.date()
    .typeError('Invalid date format')
    .required('An end date is required')
    .transform((value, originalValue) =>
      originalValue ? new Date(originalValue) : null
    )
    .test(
      'is-strictly-after',
      'End date and time must be strictly later than start date and time',
      function (endDate) {
        const startDate: Date = this.resolve(Yup.ref('startDate')) // Dynamically resolve latest startDate
        return endDate.getTime() >= startDate.getTime()
      }
    )
})
