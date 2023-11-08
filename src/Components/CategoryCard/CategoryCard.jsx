import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  const { _id, name, img } = category;
  return (
    // <Link to={`/categoryDetails/${_id}`}>
    <div className="card bg-[#F0F0F0] shadow-xl ">
      <figure className="px-2 pt-2">
        <img
          src={img}
          alt="Brand Name"
          className="rounded-xl w-36 h-32 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
      </div>
      <Link className="btn btn-ghost" to={`/categoryDetails/${_id}`}>
        Details
      </Link>
    </div>
    // </Link>
  );
}
