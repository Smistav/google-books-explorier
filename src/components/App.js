import { useState } from 'react'
import Books from './Books/Books'
import QueryForm from './QueryForm';

function App() {
  function handlerSubmit(query) {
    console.log(query)
  }
  const [books, setBooks] = useState([]);
  return (
    <div className="container">
      <h1>Search for books</h1>
      <QueryForm onSubmit={handlerSubmit} />
      <Books books={books} />
    </div >
  );
}
export default App;
