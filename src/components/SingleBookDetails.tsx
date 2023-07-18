/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLoaderData } from "react-router-dom";
import {
  useGetCommentsQuery,
  usePostCommentsMutation,
} from "../redux/features/books/booksApi";
import { useAppSelector } from "../redux/hooks";
import SingleComment from "./SingleComment";
import { Key } from "react";
import { Helmet } from "react-helmet-async";

export default function SingleBookDetails() {
  interface IBook {
    _id: string;
    author: string;
    title: string;
    genre: string;
    publicationYear: string;
  }

  const [postComment] = usePostCommentsMutation();

  const { user } = useAppSelector((state) => state.user);

  const bookData = useLoaderData();

  const { author, title, genre, publicationYear, _id } = bookData as IBook;

  const { data: commentData } = useGetCommentsQuery(_id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  const handleComment = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();

    const comment = e.target.comment.value;
    const option = {
      data: {
        email: user.email,
        comment,
        id: _id,
      },
    };
    postComment(option);
    e.target.reset();
  };

  return (
    <div className="bg-gray-800 min-h-screen py-20 px-20">
      <Helmet>
        <title>Best Readers - Single Books Information</title>
      </Helmet>
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
      {user?.email && (
        <div className="mt-20 py-10 bg-white rounded-lg">
          {commentData &&
            commentData.map(
              (comment: {
                _id: Key | null | undefined;
                comment: string;
                timestamp: string;
              }) => <SingleComment key={comment._id} data={comment} />
            )}
        </div>
      )}
    </div>
  );
}
