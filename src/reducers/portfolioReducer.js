export default function portfolioReducer(state = {portfolios: []}, action) {
  switch (action.type) {
    case 'FETCH_PORTFOLIOS':
      return {portfolios: action.payload}
    case 'CREATE_PORTFOLIO':

      //grab previous state, grab all previous portfolios in state and our new portfolio
      return {...state, portfolios: [...state.portfolios, action.payload]}
    default:
      return state
  }
}