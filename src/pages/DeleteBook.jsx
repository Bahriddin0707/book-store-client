import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function DeleteBook() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:4000/api/books/${id}`)
      .then(() => {
        setIsLoading(false);
        navigate("/");
        enqueueSnackbar("Book deleted successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        enqueueSnackbar("Something went wrong", {
          variant: "error",
        });
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-2xl font-bold text-gray-600 my-6 text-center">
        Delete Book
      </h1>
      {isLoading ? <Spinner /> : ""}
      <div className="flex flex-col items-center mx-auto p-8 border-2 border-red-500 rounded-xl sm:max-w-[600px] w-full shadow-2xl">
        <h3 className="text-2xl text-red-500 mb-6">
          Are you sure you want to delete this book ?
        </h3>

        <button
          onClick={handleDeleteBook}
          className="bg-red-500 w-full sm:max-w-[300px] text-white px-8 py-2"
        >
          Yes, I want to delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
