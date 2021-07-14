import React from 'react'
import BookList from './BookList'

function Books({ books }) {

  // const [countCards, setCountCards] = useState(setCountCard('init'));
  // const [more, setMore] = useState(false);
  // useEffect(() => {
  //   countCards < filteredCardListLength ? setMore(true) : setMore(false);
  // }, [countCards, filteredCardListLength]);

  // function handleClick() {
  //   setCountCards(countCards + setCountCard('add'));
  // }

  return (
    <div className="">
      <BookList books={books} />
    </div>
  )
}
export default Books