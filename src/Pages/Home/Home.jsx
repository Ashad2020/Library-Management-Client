import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Banner from "../../Components/Banner/Banner";
import BookForAll from "../../Components/BookForAll/BookForAll";
import Review from "../../Components/CategoryCard/ReaderReview/Review";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  const axios = useAxios();

  const getCategories = async () => {
    const res = await axios.get("/categories");
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  // console.log(data);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }
  return (
    <>
      <Banner></Banner>
      <div className="bg-[#F2F2F2] dark:bg-[#1D232A] dark:text-slate-400 py-4">
        <h2 className="text-4xl text-center  py-8">Open Library</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-4 my-8  ">
          {data?.data?.map((category) => {
            return (
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            );
          })}
        </div>
      </div>
      <BookForAll></BookForAll>
      <Review></Review>
      <Footer></Footer>
    </>
  );
}
