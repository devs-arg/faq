
type InflationAdjustedProps = {
  value: string
  date: string
}

const ANUAL_INFLATION = 113.4
const DAILY_INFLATION = ANUAL_INFLATION / 365
const MILISECONDS_IN_DAY = 1000 * 60 * 60 * 24

const ARSFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
})

export const InflationAdjusted = (props: InflationAdjustedProps) => {
  const { value, date } = props

  const parsedDate = new Date(date)
  const parsedValue = parseFloat(value)
  const now = new Date()
  const diff = Math.trunc((now.getTime() - parsedDate.getTime()) / MILISECONDS_IN_DAY)
  const adjustedValue = parsedValue + ((parsedValue * (diff * DAILY_INFLATION)) / 100)

  return ARSFormatter.format(adjustedValue)
}