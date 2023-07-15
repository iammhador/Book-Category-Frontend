import { useLoaderData } from "react-router-dom";

export default function SingleBookDetails() {
  interface IBook {
    author: string;
    title: string;
    genre: string;
    publicationYear: string;
  }

  interface IComment {
    content: string;
  }

  const data = useLoaderData();
  const { author, title, genre, publicationYear } = data as IBook;

  const handleComment = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();

    const comment = e.target.comment.value as IComment;
    console.log(comment);
  };

  return (
    <div className="bg-gray-800 min-h-screen py-20 px-20 ">
      <div className="bg-white w-4/12 mx-auto py-5 px-5 rounded-lg shadow-lg shadow-cyan-500">
        <div className="flex justify-between ">
          <p className="text-sm font-light bg-cyan-500 text-white py-1 px-2 rounded-md">
            {genre}
          </p>
          <p className="text-sm font-light bg-cyan-500 text-white py-1 px-2 rounded-md">
            {publicationYear}
          </p>
        </div>
        <h2 className="text-center font-bold text-xl uppercase text-red-500">
          {title}
        </h2>
        <h4 className="text-center text-sm font-thin">{author}</h4>
      </div>

      <div className="bg-gray-900 w-2/3 mt-10 mx-auto py-5 px-5 rounded-lg shadow-xl shadow-red-500 border border-red-500">
        <form onSubmit={handleComment}>
          <input
            type="text"
            name="comment"
            className="w-full bg-gray-200 rounded-lg p-2"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-6 text-white bg-red-500 hover:border-red-500 mt-3 rounded-lg uppercase"
            >
              Comment
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white w-4/5 mt-28 mx-auto py-5 px-5 rounded-lg shadow-xl ">
        <h2 className="">Name</h2>
        <h2 className="">Comment</h2>
      </div>
    </div>
  );
}
