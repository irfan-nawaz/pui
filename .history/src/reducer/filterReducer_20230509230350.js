const initialState = {
  mens: false,
  womens: false,
  track: false,
}
const FITNESS = 'fitness'
const CASUAL = 'casual'
const TRACK = 'track'
const RESET = 'reset'

const filterReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case FITNESS:
      return { ...state, mens: !state.mens }
    case CASUAL:
      return { ...state, womens: !state.womens }
    case TRACK:
      return { ...state, track: !state.track }
    case RESET:
      return initialState
    default:
      throw new Error('Something wrong occured in filter dispatch')
  }
}

export { initialState, filterReducer }