import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackButton({ destination = "/" }) {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-600 text-white
      px-6 py-2 rounded-md w-fit"
      >
        <FaArrowLeft size={20} />
      </Link>
    </div>
  );
}

export default BackButton;
