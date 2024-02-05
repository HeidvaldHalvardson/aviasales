const initialState = [
  { label: 'Все', value: 'all', checked: false },
  { label: 'Без пересадок', value: 'direct', checked: true },
  { label: '1 пересадка', value: 'one-stop', checked: true },
  { label: '2 пересадки', value: 'two-stop', checked: true },
  { label: '3 пересадки', value: 'three-stop', checked: false },
]

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changed':
      return [...action.payload]
    default:
      return state
  }
}

export default filterReducer
