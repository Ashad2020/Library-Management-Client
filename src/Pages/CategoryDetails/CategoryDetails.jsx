import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BookCard from "../../Components/BookCard/BookCard";

export default function CategoryDetails() {
  const axios = useAxios();
  const { id } = useParams();
  const getBook = async () => {
    const res = await axios.get(`/allbooks/${id}`);
    return res;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [id],
    queryFn: getBook,
  });
  const books = data?.data;

  return (
    <>
      {isLoading && <p>Loading from categoryDetails</p>}
      {!isLoading && books?.length > 0 && (
        <div className="p-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books?.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
      {!isLoading && !books?.length && (
        <div>
          <img
            src="https://i.ibb.co/VVxrb2M/opps.png"
            alt="no-book-found"
            border="0"
            className="mx-auto"
          />
          <p className="text-center bold text-2xl">No Book Found</p>
        </div>
      )}
    </>
  );
}
