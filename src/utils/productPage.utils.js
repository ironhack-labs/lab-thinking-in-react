export const isArray = (value) => {
  try {
    new Set(value)
    return true
  } catch(e){
    return false;
  }
}