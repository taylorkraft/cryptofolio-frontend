// we send an action object to our reducer
// our reducer is responsible for taking in that object and deciding what we want to update about our current store
// the reducer will return a new version of that store

function Reducer(state = {portfolios: []}, action) {
  
  switch (action.type) {
    case 'FETCH_PORTFOLIOS':
      return {portfolios: action.payload}

    case 'CREATE_PORTFOLIO':
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

    default:
      return state
  }
}

export default Reducer