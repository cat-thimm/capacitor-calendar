export const parseTimestamp = (
  timestamp?: number
): { weekday: string; day: string; time: string } => {
  if (!timestamp) {
    return { weekday: '', day: '', time: '' }
  }

  const date = new Date(timestamp)

  const weekday = date.toLocaleDateString('en-US', {
    weekday: 'short',
    timeZone: 'UTC' // Ensuring consistent timezone handling
  })

  const day =
    date
      .getUTCDate() // Get day from UTC time
      .toString()
      .padStart(2, '0') + '.' // Ensures "25." format

  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC' // Force UTC for consistency
  })

  return { weekday, day, time }
}
