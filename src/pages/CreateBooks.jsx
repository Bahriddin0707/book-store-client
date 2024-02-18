import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleCreateBook = () => {
    setIsLoading(true);

    axios
      .post("http://localhost:4000/api/books/add", {
        title,
        author,
        publishedYear,
      })
      .then(() => {
        setIsLoading(false);
        navigate("/");
        enqueueSnackbar("A new Book created successfully", {
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
      <h2 className="text-2xl my-6 text-center">Create Book</h2>

      {isLoading ? <Spinner /> : ""}

      <div className="flex flex-col bg-white border-2 rounded-md max-w-[600px] p-4 mx-auto">
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
          onClick={handleCreateBook}
          className="sm:w-[300px] w-full rounded-md bg-sky-600 mt-4  px-4 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;
