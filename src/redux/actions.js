import { QUERY_BOOKS, SET_BOOKS } from './types'

export function queryBooks(query) {
  return {
    type: QUERY_BOOKS,
    payload: query
  }
}

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books
  }
}

export function getBooks(query) {
  return (dispatch, getState) => {
    dispatch(queryBooks(query))
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => { if (res.ok) return res.json() })
      .then((books) => {
        dispatch(setBooks(books))
      })
      .catch((err) => console.log(err))

  }
}