import BookList from './Books/BookList'
import QueryForm from './QueryForm';

function App() {
  return (
    <div className="container">
      <h1>Search for books</h1>
      <QueryForm />
      <BookList />
    </div >
  );
}
export default App;
