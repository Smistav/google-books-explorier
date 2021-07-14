import React from 'react'

function Book({ book }) {

  return (
    <div className="col">
      <div className="card">
        <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt={book.volumeInfo.title} />
        <div className="card-body">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">{book.volumeInfo.description}</p>

        </div>
      </div>
    </div>
  )
}
export default Book