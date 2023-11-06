import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";

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
  console.log(data);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }
  return (
    <>
      <h2 className="text-4xl font-bold text-center  py-8">Shop by Brand</h2>

      <div className="grid grid-cols-3 max-w-3xl mx-auto gap-4 my-8">
        {data?.data?.map((category) => {
          return (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          );
        })}
      </div>
    </>
  );
}
