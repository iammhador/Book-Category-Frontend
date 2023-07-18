interface CommentData {
  email?: string;
  comment: string;
}

export default function SingleComment({
  commentDatas,
}: {
  commentDatas: CommentData;
}) {
  const { email, comment } = commentDatas;

  return (
    <div className="bg-red-500 w-4/5  mx-auto mb-5 py-5 px-5 rounded-lg shadow-xl ">
      <div className="flex items-center">
        <h2 className="bg-white py-3 px-5 rounded-md border border-black border-y-8">
          {email}
        </h2>
        <p className="text-white ml-3.5">{comment}</p>
      </div>
    </div>
  );
}
