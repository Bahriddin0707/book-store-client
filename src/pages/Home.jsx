import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showType, setShowType] = useState("card");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/api/books")
      .then((response) => {
        setBooks(response.data.books);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-3 sm:p-6">
      <div className="flex justify-center items-center gap-x-6">
        <button
          onClick={() => setShowType("card")}
          className={`text-white px-6 py-2 rounded-md ${
            showType === "card" ? "bg-sky-800" : "bg-sky-500 "
          }`}
        >
          card
        </button>

        <button
          onClick={() => setShowType("table")}
          className={`text-white px-6 py-2 rounded-md ${
            showType === "table" ? "bg-sky-800" : "bg-sky-500 "
          }`}
        >
          table
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"></h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-3xl" />
        </Link>
      </div>

      {isLoading ? (
        <Spinner />
      ) : showType === "card" ? (
        <BooksCard books={books} />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  );
}

export default Home;
