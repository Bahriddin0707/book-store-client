import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import BookModal from "../home/BookModal";

//  React Icons
import { PiBookOpenText } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

function SingleBookCard({ book }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 bg-white border-slate-400 rounded-md px-4 py-2 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-3 py-1 bg-red-300 rounded-md">
        {book.publishedYear}
      </h2>
      <h4 className="my-2 text-sm font-bold text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenText size={24} className="text-red-600 cursor-pointer" />
        <h2>{book.title}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle size={24} className="text-red-600 cursor-pointer" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          onClick={() => setShowModal(true)}
          size={24}
          className="text-blue-700 cursor-pointer hover:text-black"
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle size={24} className="text-green-700 hover:text-black" />
        </Link>

        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit
            size={24}
            className="text-yellow-500 hover:text-black"
          />
        </Link>

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete
            size={24}
            className="text-red-600 hover:text-black"
          />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

// Defining PropTypes for the component
SingleBookCard.propTypes = {
  book: PropTypes.object.isRequired, // Assuming book is an object and is required
};
export default SingleBookCard;
