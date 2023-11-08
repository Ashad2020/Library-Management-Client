import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BorrowBookCard from "../../Components/BorrowedBookCard/BorrowBookCard";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

export default function BorrowBook() {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const axios = useAxios();
  const { id } = useParams();

  const getBook = async () => {
    const res = await axios.get(`/borrowedbooks/${user?.email}`);
    setBorrowedBooks(res?.data);
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["borrowedbooks"],
    queryFn: getBook,
  });
  // useEffect(() => {
  //   setBorrowedBooks(data?.data);
  // }, [data]);

  return (
    <>
      {isLoading && <p>Loading.......</p>}
      {!isLoading && (
        <div>
          <div className="p-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {borrowedBooks?.length ? (
              borrowedBooks?.map((book) => (
                <BorrowBookCard
                  key={book._id}
                  borrowedBooks={borrowedBooks}
                  setBorrowedBooks={setBorrowedBooks}
                  book={book}
                ></BorrowBookCard>
              ))
            ) : (
              <h2 className="text-5xl text-center col-span-full">
                You have not borrowed any books yet!
              </h2>
            )}
          </div>
        </div>
      )}
    </>
  );
}
