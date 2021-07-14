import React from 'react'
import { connect } from 'react-redux'
import Book from './Book'

function BookList({ books, countBooks = 30 }) {
  return (
    <section className="list-group list-group-flush">
      {books.slice(0, countBooks).map((item) => (<Book book={item} key={item.id} />))}
    </section>
  )
}

function mapStateToProps(state) {
  console.log(state.books.books);
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps, null)(BookList)