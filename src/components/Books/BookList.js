import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'

function BookList() {
  const books = useSelector(state => state.books.books)
  return (
    <section className="">
      <div className="row">{`Found ${books.totalItems || 0} items`}</div>
      {books.items && (books.items.slice(0, 30).map((item) => (<Book book={item} key={item.id} />)))}
    </section>
  )
}

export default BookList