import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import BookCardAll from "../../Components/CardForAllBook/BookCardAll";

export default function AllBooks() {
  const axios = useAxios();

  const getAllBooks = async () => {
    const res = await axios.get("/allbooks");
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allbooks"],
    queryFn: getAllBooks,
  });
  let allbooks = data?.data;
  console.log(allbooks);
  return (
    <>
      {allbooks?.length
        ? allbooks.length > 0 && (
            <div className="p-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allbooks.map((book) => (
                <BookCardAll key={book._id} book={book} />
              ))}
            </div>
          )
        : !allbooks?.length && (
            <img
              src="https://i.ibb.co/yXWXYwH/no-product-found.png"
              alt="no-product-found"
              border="0"
              className="mx-auto"
            />
          )}
    </>
  );
}
