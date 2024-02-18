import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function ShowBook() {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:4000/api/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="h-screen p-4">
      <BackButton />
      <h1 className="text-3xl my-5">Book Details</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-fit p-4 flex flex-col border-2 rounded-xl border-sky-400">
          <div className="my-1">
            <span className="text-xl mr-4 text-purple-800">Id:</span>
            <span>{book._id}</span>
          </div>

          <div className="my-1">
            <span className="text-xl mr-4 text-purple-800">Title:</span>
            <span>{book.title}</span>
          </div>

          <div className="my-1">
            <span className="text-xl mr-4 text-purple-800">Author:</span>
            <span>{book.author}</span>
          </div>

          <div className="my-1">
            <span className="text-xl mr-4 text-purple-800">
              Published Year:
            </span>
            <span>{book.publishedYear}</span>
          </div>

          <div className="my-1">
            <span className="text-xl mr-4 text-purple-800">Created Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div className="my-1">
            <span className="text-xl mr-4 text-purple-800">
              Last Updated Time:
            </span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
