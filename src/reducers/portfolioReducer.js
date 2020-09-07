export default function portfolioReducer(state = {portfolios: []}, action ) {
  switch (action.type) {
    case 'FETCH_PORTFOLIOS':
      return {portfolios: action.payload}
    case 'CREATE_PORTFOLIO':
      return {...state, portfolios: [...state.portfolios, action.payload]}
      //grab previous state, grab all previous portfolios in state and our new portfolio
    default:
      return state
  }
}