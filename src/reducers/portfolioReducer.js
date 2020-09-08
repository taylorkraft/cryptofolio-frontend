export default function portfolioReducer(state = {portfolios: []}, action) {
  switch (action.type) {
    case 'FETCH_PORTFOLIOS':
      return {portfolios: action.payload}
    case 'CREATE_PORTFOLIO':

      //grab previous state, grab all previous portfolios in state and our new portfolio
      return {...state, portfolios: [...state.portfolios, action.payload]}
    case 'CREATE_TRADE':
      let portfolios = state.portfolios.map(portfolio => {
        if (portfolio.id === action.payload.id) {
          return action.payload
        } else {
          return portfolio
        }
      })
      return {...state, portfolios: portfolios}
    case 'DELETE_TRADE':
      let portfolioAfterDelete = state.portfolios.map(portfolio => {
        if (portfolio.id === action.payload.id) {
          return action.payload
        } else {
          return portfolio
        }
      })
      return {...state, portfolios: portfolioAfterDelete}
    default:
      return state
  }
}