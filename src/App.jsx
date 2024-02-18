import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTING PAGES
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";

// IMPORTING COMPONENTS

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-[1240px] mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/create" element={<CreateBooks />} />
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
