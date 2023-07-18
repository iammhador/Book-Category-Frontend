/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useNavigate } from "react-router-dom";
import { useCreateBookMutation } from "../../redux/features/books/booksApi";
import { useAppSelector } from "../../redux/hooks";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function AddNewBooks() {
  const [createBook, { isSuccess }] = useCreateBookMutation();

  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const handleData = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publicationYear = form.publicationYear.value;
    const option = {
      data: {
        title,
        author,
        genre,
        publicationYear,
        email: user.email,
      },
    };
    createBook(option);
    if (isSuccess === false) {
      toast.success("successfully added a new books");
    }
    form.reset();
    navigate("/");
  };
  return (
    <div className="bg-gray-800  min-h-screen mx-auto py-10 px-10">
      <Helmet>
        <title>Best Readers - Add New Books</title>
      </Helmet>
      <h3 className="text-white uppercase font-bold text-3xl mb-10 text-center">
        Add new books
      </h3>
      <div className="w-2/3 bg-white mx-auto p-10 rounded-lg">
        <form onSubmit={handleData}>
          <input
            type="title"
            name="title"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder="TITLE"
          />

          <br />
          <input
            type="text"
            id="author"
            name="author"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder="AUTHOR"
          />
          <br />
          <input
            type="text"
            id="genre"
            name="genre"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder="GENRE"
          />
          <br />
          <input
            type="text"
            id="publicationYear"
            name="publicationYear"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder="PUBLICATION YEAR"
          />
          <br />
          <button
            type="submit"
            className="text-white bg-red-500 py-3 px-5 w-full rounded-lg"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
