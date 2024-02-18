import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

function BooksTable({ books }) {
  return (
    <table className="w-full border-separate border-spacing-2 max-md:border-spacing-1">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Published Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return (
            <tr key={book._id} className="text-center h-8">
              <td className="border border-slate-600 rounded-md">
                {index + 1}
              </td>
              <td className="border border-slate-600 rounded-md">
                {book.title}
              </td>
              <td className="border border-slate-600 rounded-md max-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-600 rounded-md max-md:hidden">
                {book.publishedYear}
              </td>
              <td className="border border-slate-600 rounded-md">
                <div className="flex justify-center items-center gap-x-5">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle size={18} className="text-green-700" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit size={24} className="text-yellow-500" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete size={24} className="text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// Defining PropTypes for the component
BooksTable.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksTable;
