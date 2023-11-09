import Rating from "react-rating";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

export default function BorrowBookCard({
  book,
  borrowedBooks,
  setBorrowedBooks,
}) {
  const axios = useAxios();

  const {
    _id,
    photoUrl,
    bookName,
    authorName,
    category,
    description,
    rating,
    quantity,
  } = book;

  const handleClick = () => {
    axios
      .delete(`/deletebook/${_id}`)
      .then((response) => {
        if (response?.data?.msg) {
          toast.success("Book return successful");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const updateedBorrowedBooks = borrowedBooks.filter(
      (book) => book._id != _id
    );
    console.log(_id);
    console.log(updateedBorrowedBooks);
    setBorrowedBooks(updateedBorrowedBooks);
  };
  return (
    <div className="card  bg-green-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photoUrl}
          alt={category}
          className="rounded-xl h-60 w-4/5 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{bookName}</h2>
        <p>Category Name: {category}</p>
        <div className="flex items-center">
          <span className="pr-2">Rating: </span>
          <Rating initialRating={rating} readonly />
        </div>
        <div className="card-actions">
          <button onClick={handleClick} className="btn btn-primary">
            Return
          </button>
          {/* <Link to={`/returnbook`}>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
