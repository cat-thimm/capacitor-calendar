export interface CreateEventProps {
  onSubmitForm: (calendarProps: {
    title: string
    startDate: string
    endDate: string
    description?: string
  }) => Promise<void>
  showSuccessModal: boolean
  setShowSuccessModal: (showSuccessModal: boolean) => void
  returnToHomepage: () => void
}
