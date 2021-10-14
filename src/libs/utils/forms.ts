// border radius
export const flatRight = '10% 0% 0% 10% / 10% 0% 0% 10%'
export const flatLeft = '0% 10% 10% 0% / 0% 10% 10% 0%'

export const trimZeroes = (value: number | undefined) => {
  if (value === 0 || value === undefined || isNaN(value)) return '0'
  return `${value}`.replace(/^0+/, '')
}
