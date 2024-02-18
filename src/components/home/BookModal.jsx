//  React Icons
import { PiBookOpenText } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function BookModal({ book, onClose }) {
  return (
    <div
      onClick={onClose}
      className="flex justify-center items-center fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-40 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] max-w-full h-[350px] bg-white rounded-md p-4 flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose}
          size={24}
          className="absolute top-5 right-5 text-red-600 cursor-pointer"
        />
        <h2 className="w-fit px-3 py-1 bg-red-300 rounded-md">
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

        <h2 className="my-2 text-gray-500 font-bold">
          More details about this book
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolore at
          odio facere nostrum dignissimos, consectetur ad, modi inventore
          possimus quod ab doloribus impedit alias accusamus, consequuntur
          illum! Vel voluptatem hic illo obcaecati quam eaque facere placeat
          nobis, fugiat eum.
        </p>
      </div>
    </div>
  );
}

export default BookModal;
