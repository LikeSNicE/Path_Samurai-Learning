
export const validate = (value) => {
  if(value) return undefined
  return 'Field is not right filled'
}

export const maxLength = (maxLength) => (value) => {
  if (value.length > maxLength) return `Hey bro you exceed max length : ${maxLength}`
  return undefined
}

