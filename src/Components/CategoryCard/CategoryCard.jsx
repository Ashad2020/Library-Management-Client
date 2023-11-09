import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  const { _id, name, img } = category;
  return (
    // <Link to={`/categoryDetails/${_id}`}>
    <div className="card pb-2 bg-[#F0F0F0] dark:bg-[#1D232A] dark:text-slate-400 shadow-xl border-2">
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
      <button className="btn btn-ghost dark:btn-neutral">
        <Link to={`/categoryDetails/${_id}`}>Details</Link>
      </button>
    </div>
    // </Link>
  );
}
