export default function portfolioReducer(state = {portfolios: []}, action ) {
  switch (action.type) {
    case 'FETCH_PORTFOLIOS':
      return {portfolios: action.payload}
    default:
      return state
  }
}