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
    const res = await axios.get("/allbooks?quantity=quantity", {
      withCredentials: true,
    });
    setAllBooks(res?.data);
  };

  // useEffect(() => {
  //   setAllBooks(data?.data);
  // }, [data]);
  // let allbooks = data?.data;
  // console.log(allBooks);

  // const handleClick = () => {
  //   const res = await axios.get("/allbooks");
  //   return res;
  // }
  return (
    <>
      {isLoading && <p className="text-2xl text-center">Loading.......</p>}
      {!isLoading && (
        <div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={getAvailableBooks}>
              Filter by availability
            </button>
          </div>
          <div className="p-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allBooks?.map((book) => (
              <BookCardAll key={book._id} book={book} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
