import { QUERY_BOOKS, SET_BOOKS } from './types'

export function query_books(query) {
  return {
    type: QUERY_BOOKS,
    payload: query
  }
}

export function set_books(books) {
  return {
    type: SET_BOOKS,
    payload: books
  }
}