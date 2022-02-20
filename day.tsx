import dayjs from 'dayjs'
dayjs.extend(relativTime)

interface Props {
  date: string
}

function HowLongAge({ date }: Props) {
  const parseDate = (date) => {
    const day = dayjs(date)
    const now = dayjs(new Date())
    if (day.diff(now, 'day') < 0) {
      return `今天 ${day.format('HH:mm')}`
    } else if (day.diff(now, 'day') === 1) {
      return `昨天 ${day.format('HH:mm')}`
    }
  }

  return (
    <div>
      <h1>{parseDate(date)}</h1>
    </div>
  )
}
