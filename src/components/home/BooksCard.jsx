import PropTypes from "prop-types";
import SingleBookCard from "./SingleBookCard";

function BooksCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {books.map((book) => {
        return <SingleBookCard book={book} key={book._id} />;
      })}
    </div>
  );
}

// Defining PropTypes for the component
BooksCard.propTypes = {
  books: PropTypes.array.isRequired,
};
export default BooksCard;
