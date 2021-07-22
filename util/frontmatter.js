export const isEmailObject = (value) => {
  return (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ['name', 'email'].every((key) => key in value)
  )
}

export const isEmailArray = (value) => {
  return value.every((v) => isEmailObject(v))
}
