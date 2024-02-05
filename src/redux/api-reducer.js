const initialState = {
  tickets: [],
}

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getTickets':
      return {
        ...state,
        tickets: action.payload,
      }
    default:
      return state
  }
}

export default apiReducer
