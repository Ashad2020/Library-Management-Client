import { useForm } from "react-hook-form";
export default function AddBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      photoUrl: "",
      bookName: "",
      authorName: "",
      category: "Pick Category",
      description: "",
      rating: "Rating",
    },
  });

  /*
   {
    defaultValues: {
      photoUrl: "",
      bookName: "",
      authorName: "",
      category: "",
      description: "",
      rating: "",
    },
  }
   */
  // console.log(errors); quantity: "",
  return (
    <div className="hero bg-base-200 py-12">
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              {...register("photoUrl", { required: "This is required." })}
              className="input input-bordered"
            />
            <p>{errors.photoUrl?.message}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              placeholder="Book Name"
              {...register("bookName", { required: "This is required." })}
              className="input input-bordered"
            />
            <p>{errors.bookName?.message}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity of the book</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              {...register("quantity", {
                required: "This is required.",
                min: { value: 1, message: "Minimum quantity: 1" },
              })}
              className="input input-bordered"
            />
            <p>{errors.quantity?.message}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              placeholder="Author Name"
              {...register("authorName", { required: "This is required." })}
              className="input input-bordered"
            />
            <p>{errors.authorName?.message}</p>
          </div>
          <div className="form-control">
            <div className="input-group">
              <span className="label-text">Category</span>
              <select
                {...register("category", { required: "This is required." })}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Pick Category
                </option>
                <option value="Novel">Novel</option>
                <option value="Thriller">Thriller</option>
                <option value="History">History</option>
                <option value="Drama">Drama</option>
                <option value="Sci-Fi">Sci-Fi</option>
              </select>
            </div>
            <p>{errors.category?.message}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description of the Book</span>
            </label>
            <textarea
              placeholder="Short Description"
              {...register("description", { required: "This is required." })}
              className="textarea textarea-bordered textarea-md w-full"
            ></textarea>
            <p>{errors.description?.message}</p>
          </div>
          <div className="form-control">
            <div className="input-group">
              <span className="label-text">Rating</span>

              <select
                {...register("rating", { required: "This is required." })}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Rating
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <p>{errors.rating?.message}</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}
