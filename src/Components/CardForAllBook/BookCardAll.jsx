import Rating from "react-rating";
import { Link } from "react-router-dom";

export default function BookCardAll({ book }) {
  const { _id, photoUrl, bookName, authorName, category, rating, quantity } =
    book;
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
        <p>Author Name: {authorName}</p>
        <p>Category: {category}</p>
        <div className="flex items-center">
          <span className="pr-2">Rating: </span>
          <Rating initialRating={rating} readonly />
        </div>
        <div className="card-actions">
          <Link to={`/updatebook/${_id}`}>
            <button className="btn btn-primary">Update Book Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
