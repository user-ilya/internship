export const inc = () => {
    return {
        type: 'INC'
    }
}
export const dec = () => {
    return {
        type: 'DEC'
    }
}
export const res = () => {
  return function (dispatch) {
    setTimeout(() => {
        dispatch({type: 'RES'})
    }, 1000);
  }
}