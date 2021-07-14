import { useState } from 'react'

function QueyForm({ onSubmit }) {
  const initialForm = {
    query: '',
    category: 'all',
    sort: 'relevance'
  }
  const [query, setQuery] = useState(initialForm);
  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setQuery({ ...query, [name]: value });
  }
  function handlerSubmit(e) {
    e.preventDefault();
    onSubmit(query);
    e.target.reset();
  }
  return (
    <form onSubmit={handlerSubmit}>
      <div className="row align-items-end justify-content-center mb-3">
        <div className="col justify-items-center ">
          <label htmlFor="inputQuery" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="inputQuery"
            aria-describedby="emailHelp"
            name="query"
            value={query.value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col">
          <h5>Categories</h5>
        </div>
        <div className="col">
          <select
            name="category"
            value={query.value}
            onChange={handleChange}
            className="form-select form-select-sm"
            aria-label=".form-select-sm example">
            <option value="all">all</option>
            <option value="art">art</option>
            <option defaultValue="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>
        <div className="col">
          <h5>Sorting by</h5>
        </div>
        <div className="col">
          <select
            name="sort"
            value={query.value}
            onChange={handleChange}
            className="form-select form-select-sm"
            aria-label=".form-select-sm example">
            <option defaultValue="rekevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
    </form>
  )
}
export default QueyForm