const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const noteToChange = state.find((n) => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map((n) => n.id === id ? changedNote : n)
    default:
      return state
  }

  // if (action.type === 'NEW_NOTE') {
  //   return [...state, action.data]
  // } else if ( action.type === 'TOGGLE_IMPORTANCE') {
  //   const noteToChange = state.find((note) => note.id === action.data.id)
  //   const changedNote = {
  //     ...noteToChange,
  //     important: !noteToChange.important
  //   }
  //   return state.map((note) => note.id === action.data.id ? changedNote : note)
  // }
  // return state
}

export default noteReducer
