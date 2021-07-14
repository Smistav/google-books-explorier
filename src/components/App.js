import BookList from './Books/BookList'
import QueryForm from './QueryForm';

function App() {
  function handleSubmit(query) {
    console.log(query)
  }
  return (
    <div className="container">
      <h1>Search for books</h1>
      <QueryForm onSubmit={handleSubmit} />
      <BookList />
    </div >
  );
}
export default App;
