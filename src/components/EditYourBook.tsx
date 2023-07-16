/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { useUpdateMatchedBookMutation } from "../redux/features/books/booksApi";

export default function EditYourBook() {
  const loader = useLoaderData();
  const { author, title, genre, publicationYear, _id } = loader;

  const [updateBook, { isSuccess, data }] = useUpdateMatchedBookMutation();
  console.log(isSuccess);
  console.log(data);

  const handleData = async (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    const updatedTitle = form.title.value;
    const updatedAuthor = form.author.value;
    const updatedGenre = form.genre.value;
    const updatedPublicationYear = form.publicationYear.value;
    const option = {
      data: {
        title: updatedTitle || title,
        author: updatedAuthor || author,
        genre: updatedGenre || genre,
        publicationYear: updatedPublicationYear || publicationYear,
      },
    };

    try {
      await updateBook({ _id, ...option });
      if (isSuccess) {
        toast.success("Book information updated successfully");
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <div className="bg-gray-800  min-h-screen mx-auto py-10 px-10">
      <h3 className="text-white uppercase font-bold text-3xl mb-10 text-center">
        Edit your " {title} " books
      </h3>
      <div className="w-2/3 bg-white mx-auto p-10 rounded-lg">
        <form onSubmit={handleData}>
          <input
            type="title"
            name="title"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder={title}
          />

          <br />
          <input
            type="text"
            id="author"
            name="author"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder={author}
          />
          <br />
          <input
            type="text"
            id="genre"
            name="genre"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder={genre}
          />
          <br />
          <input
            type="text"
            id="publicationYear"
            name="publicationYear"
            className="w-full bg-gray-800 rounded-lg p-4 mb-3 text-gray-400 text-center"
            placeholder={publicationYear}
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
