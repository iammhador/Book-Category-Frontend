/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { MdDelete } from "react-icons/md";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { useDeleteMatchedBookMutation } from "../redux/features/books/booksApi";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function YourBookDetails({ book }) {
  const { author, title, genre, publicationYear, _id } = book;

  const [deleteBook] = useDeleteMatchedBookMutation();

  const handleDelete = async () => {
    try {
      await deleteBook(_id);
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <div className="card w-96 bg-gray-800 text-white shadow-xl">
      <div className="card-body text-right">
        <div className="flex -mb-1">
          <p className="text-sm font-light text-left">{genre}</p>
          <p className="text-sm font-light text-right">{publicationYear}</p>
        </div>
        <h3 className="text-lg font-bold text-orange-500 text-center">
          {title}
        </h3>
        <p className="text-sm font-normal text-center -mt-2 ">{author}</p>
        <div className="flex justify-between mt-3">
          <div className="text-2xl font-bold text-orange-600">
            <Link to={`/edit-your-book/${_id}`}>
              <BiSolidMessageSquareEdit />
            </Link>
          </div>

          <div
            className="text-2xl font-bold text-orange-600"
            onClick={handleDelete}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}
