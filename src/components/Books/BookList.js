import React from 'react'
import Book from './Book'

function BookList({ books, countBooks = 30 }) {
  return (
    <section className="list-group list-group-flush">
      {books.slice(0, countBooks).map((item) => (<Book book={item} key={item.id} />))}
    </section>
  )
}
export default BookList