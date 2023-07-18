/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Helmet } from "react-helmet-async";
import { useGetEmailMatchedBooksQuery } from "../../redux/features/books/booksApi";
import { useAppSelector } from "../../redux/hooks";
import YourBookDetails from "../YourBookDetails";

interface IBook {
  author: string;
  title: string;
  genre: string;
  publicationYear: string;
  _id: string;
}

export default function YourBooks() {
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading, isError } = useGetEmailMatchedBooksQuery(
    user?.email,
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 10000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Best Readers - Your Book Collection</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold text-orange-500 uppercase my-20 ">
        Your Books
      </h2>
      {user.email && (
        <div className="grid grid-cols-3 gap-5 w-4/5 mx-auto">
          {data?.length > 0 ? (
            data.map((singleBook: IBook) => (
              <YourBookDetails key={singleBook._id} book={singleBook} />
            ))
          ) : (
            <div className="">
              <p className="text-gray-800 text-center font-medium text-lg">
                Empty! No book information found!!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
