import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import BookCardAll from "../../Components/CardForAllBook/BookCardAll";
import { useEffect, useState } from "react";

export default function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const axios = useAxios();

  const getAllBooks = async () => {
    const res = await axios.get("/allbooks");
    setAllBooks(res?.data);
    return res;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allbooks"],
    queryFn: getAllBooks,
  });
  const getAvailableBooks = async () => {
    const res = await axios.get("/allbooks?quantity=quantity");
    setAllBooks(res?.data);
  };

  // useEffect(() => {
  //   setAllBooks(data?.data);
  // }, [data]);
  // let allbooks = data?.data;
  console.log(allBooks);

  // const handleClick = () => {
  //   const res = await axios.get("/allbooks");
  //   return res;
  // }
  return (
    <>
      {allBooks?.length
        ? allBooks.length > 0 && (
            <div>
              <button className="btn btn-primary" onClick={getAvailableBooks}>
                Available Books
              </button>
              <div className="p-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allBooks.map((book) => (
                  <BookCardAll key={book._id} book={book} />
                ))}
              </div>
            </div>
          )
        : !allBooks?.length && (
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
