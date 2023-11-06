import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import BorrowBook from "../../Pages/BorrowBook/BorrowBook";
import { useState } from "react";

export default function DetailsCard() {
  const axios = useAxios();
  const { id } = useParams();

  const getBook = async () => {
    const res = await axios.get(`/book/${id}`);
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [id],
    queryFn: getBook,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [returnDate, setReturnDate] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Return date submitted:", returnDate);
    closeModal();
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="card w-96 bg-green-100 shadow-xl mx-auto my-8">
          <figure className="px-10 pt-10">
            <img
              src={data?.data?.photoUrl}
              className="rounded-xl h-60 w-4/5 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Book Name: {data?.data?.bookName}</h2>
            <p>Category Name: {data?.data?.category}</p>
            <p>{data?.data?.description}</p>
            <div className="card-actions">
              <div>
                <button className="btn btn-primary" onClick={openModal}>
                  Open modal
                </button>
                {isModalOpen && (
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                    open
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <form method="dialog" onSubmit={handleSubmit}>
                        <label>
                          Return Date:
                          <input
                            className="mx-4"
                            type="date"
                            value={returnDate}
                            onChange={handleReturnDateChange}
                          />
                        </label>
                        <button className="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </dialog>
                )}
              </div>

              <Link to={`/readbook`}>
                <button className="btn btn-primary">Read</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
