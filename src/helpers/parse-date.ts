export const parseTimestamp = (
  timestamp?: number
): { weekday: string; day: string; time: string } => {
  if (!timestamp) {
    return { weekday: '', day: '', time: '' }
  }

  const date = new Date(timestamp)

  // Get shortened weekday name (e.g., "Mon")
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })

  // Get the day of the month with a dot (e.g., "01.")
  const day = date.getDate().toString().padStart(2, '0') + '.'

  // Get the time in HH:mm format (e.g., "14:30")
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })

  return { weekday, day, time }
}
