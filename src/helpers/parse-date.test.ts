import { describe, expect, test } from 'vitest'
import { parseTimestamp } from '@/helpers/parse-date'

describe('parseTimestamp', () => {
  test('should return formatted date with AM/PM', () => {
    const timestamp = new Date('2024-02-25T14:30:00Z').getTime() // 2:30 PM UTC
    const result = parseTimestamp(timestamp)

    expect(result).toEqual({
      weekday: 'Sun',
      day: '25.',
      time: '2:30 PM'
    })
  })

  test('should handle morning times correctly', () => {
    const timestamp = new Date('2024-02-26T08:00:00Z').getTime() // 8:00 AM UTC
    const result = parseTimestamp(timestamp)

    expect(result).toEqual({
      weekday: 'Mon',
      day: '26.',
      time: '8:00 AM'
    })
  })

  test('should return empty strings when timestamp is undefined', () => {
    const result = parseTimestamp(undefined)

    expect(result).toEqual({
      weekday: '',
      day: '',
      time: ''
    })
  })
})
