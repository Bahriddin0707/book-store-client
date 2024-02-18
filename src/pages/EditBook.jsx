import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:4000/api/books/${id}`)
      .then((response) => {
        setTitle(response.data.book.title);
        setAuthor(response.data.book.author);
        setPublishedYear(response.data.book.publishedYear);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Something went wrong. Please try again");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    setIsLoading(true);

    axios
      .put(`http://localhost:4000/api/books/${id}`, {
        title,
        author,
        publishedYear,
      })
      .then(() => {
        setIsLoading(false);
        navigate("/");
        enqueueSnackbar("Book edited successfully", {
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
      <h2 className="text-3xl my-6 text-center">Edit Book</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col bg-white border-2 rounded-xl max-w-[600px] p-4 mx-auto">
          <div className="my-2">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              className="border-2 rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div className="my-2">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              value={author}
              className="border-2 rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div className="my-2">
            <label className="text-xl mr-4 text-gray-500">Published Year</label>
            <input
              type="number"
              onChange={(e) => {
                setPublishedYear(e.target.value);
              }}
              value={publishedYear}
              className="border-2 rounded-lg px-3 py-2 w-full"
            />
          </div>

          <button
            onClick={handleEditBook}
            className="sm:w-[300px] w-full rounded-md bg-sky-600 mt-4  px-4 py-2 text-white"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default EditBook;
