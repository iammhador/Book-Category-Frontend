/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useGetEmailMatchedBooksQuery } from "../../redux/features/books/booksApi";
import { useAppSelector } from "../../redux/hooks";
import YourBookDetails from "../YourBookDetails";

export default function YourBooks() {
  const { user } = useAppSelector((state) => state.user);

  const { data } = useGetEmailMatchedBooksQuery(user?.email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl text-center font-bold text-orange-500 uppercase my-20 ">
        Your Books
      </h1>
      <div className="grid grid-cols-3 gap-5 w-4/5 mx-auto">
        {data?.map((book) => (
          <YourBookDetails key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
