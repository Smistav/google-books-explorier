import { QUERY_BOOKS, SET_BOOKS } from "./types"

const initialState = {
  books: []
}

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_BOOKS:
      return { ...state, query: action.payload }
    case SET_BOOKS:
      return { ...state, books: action.payload }
    default: return state
  }
}

export default booksReducer