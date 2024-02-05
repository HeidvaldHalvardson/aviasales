const sortReducer = (state = 'cheapest', action) => {
  switch (action.type) {
    case 'cheapest':
      return 'cheapest'
    case 'fastest':
      return 'fastest'
    case 'optimal':
      return 'optimal'
    default:
      return state
  }
}

export default sortReducer
