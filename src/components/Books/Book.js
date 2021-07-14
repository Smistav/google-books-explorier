import React from 'react'

function Book({ book }) {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={book.url} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.deacription}</p>
        <a href="/" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
export default Book