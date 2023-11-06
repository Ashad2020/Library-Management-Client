import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

export default function BorrowBook() {
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
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
